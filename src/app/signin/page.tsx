"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Image from 'next/image'
import { useEffect } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useRouter } from "next/navigation"

import { useToast } from "@/hooks/use-toast"

import { useAuthStore } from "@/store/useAuthStore"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

const SigninPage = () => {

  const router = useRouter()

  const { toast } = useToast()

  const { login } = useAuthStore.getState();

  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { username, password} = data
    try {
      await login(username, password);
      console.log("Successful");
      router.push('/admin');
    } catch (error) {
      console.log(error);
      router.push('/');
      toast({
        title: "Error",
        description: "Invalid credentials",
      })
    }
  };

  return (
    <div className='flex justify-center items-center h-[100vh] w-full'>
      <div className='flex max-w-[800px] rounded-2xl border border-zinc-300 overflow-hidden'>
        <div className='w-1/2 flex flex-col p-5'>
        <Image src={'/logo.svg'} width={100} height={100} alt="image" className='place-self-center mt-5'/>
        <h1 className='text-2xl font-semibold text-center mt-5'>Admin Sign In</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-main">Sign In</Button>
          </form>
        </Form>
        </div>
        <div className='w-1/2'>
          <Image src={'/about.png'} width={800} height={800} alt="image" priority className="object-cover h-full"/>
        </div>
      </div>
    </div>
  )
}

export default SigninPage