"use client"

import Image from 'next/image'
import React from 'react'
import { PhoneCall } from 'lucide-react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useToast } from "@/hooks/use-toast"
 
const FormSchema = z.object({
  feedback: z.string().nonempty("Feedback is required")
})

const Contact = () => {

    const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          feedback: "",
        },
      })

      const { handleSubmit, reset, formState: { isSubmitting } } = form;

      const onSubmit = async (values : z.infer<typeof FormSchema>) => {
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })

            const result = await response.json();

            if (response.ok) {
                toast({
                    title: "Feedback submitted!",
                    description: result.message || "Your feedback has been received.",
                });
                reset();
            } else {
                toast({
                    title: "Error",
                    description: result.message || "Failed to submit feedback",
                });
            }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit feedback",
            })
        }
      }

  return (
    <section id='contact' className='h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl py-20 w-full'>Contact</h1>
        <div className='max-w-[1200px] w-full h-full p-5 sm:p-10 bg-white flex md:flex-row flex-col gap-5'>
            <div className='w-full md:w-1/3 flex flex-col gap-3 items-center justify-center md:justify-start'>
                <Image src={"/logo.svg"} width={200} height={200} alt='logo'/>
                <Form {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex w-full justify-center'>
                        <FormField
                        control={form.control}
                        name="feedback"
                        render={({ field }) => (
                            <FormItem>
                            <FormControl>
                                <Input placeholder="Feedback" {...field} className='rounded-none'/>
                            </FormControl>
                            </FormItem>
                        )}
                        />
                        <button disabled={isSubmitting} className='bg-main text-sm px-3 text-[#f3f3f3]'>{isSubmitting ? 'Loading':'Submit'}</button>
                    </form>
                </Form>
            </div>
            <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
                <h1 className='text-zinc-600 text-sm md:text-base'>088 Bayside St</h1>
                <h1 className='text-zinc-600 text-sm md:text-base'>Bancaan</h1>
                <h1 className='text-zinc-600 text-sm md:text-base'>Naic Cavite</h1>
                <h1 className='mt-2 text-zinc-600'>
                    Monday - Saturday 8AM - 10PM
                </h1>
            </div>
            <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-3 text-zinc-600'>
            <h1 className='text-sm md:text-base'>+63 948 130 0687</h1>
            <PhoneCall size={30} className='text-main'/>
            </div>
                <div className='flex gap-3 mt-5 text-zinc-600'>
                    <h2 className='text-xs'>Email:</h2>
                    <h1 className=' text-sm md:text-base'>printzo744@gmail.com</h1>
                </div>
                <div className='flex flex-col mt-3 text-zinc-600'>
                    <h1>If you need Fullstack Developer contact</h1>
                    <div className='gap-3 flex md:justify-start justify-center'>
                    <h2 className='text-xs'>Email:</h2>
                    <h1 className='text-sm md:text-base'>sample@gmail.com</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
