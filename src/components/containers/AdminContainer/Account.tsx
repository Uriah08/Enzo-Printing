import React, { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface User {
  id: string;
  name: string;
  password: string;
}

// Define validation schema using zod
const userSchema = z.object({
  name: z.string().min(1, 'Username is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Account = () => {
  const { toast } = useToast();
  const [user, setUser] = React.useState<User | null>(null);

  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: '',
      password: '',
    },
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/user');
        const data = await response.json();

        if (response.ok) {
          setUser(data);
          form.setValue('name', data.name); // Set the name field with the fetched username
        } else {
          toast({
            title: "Error",
            description: "Failed to fetch user data",
          });
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast({
          title: "Error",
          description: `Failed to fetch user data`,
        });
      }
    };

    fetchUser();
  }, [toast, form]);

  const onSubmit = async (data: z.infer<typeof userSchema>) => {
    try {
      const response = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user?.id, name: data.name, password: data.password }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
        toast({
          title: "Success",
          description: "Account updated successfully!",
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to update account",
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast({
        title: "Error",
        description: `Failed to update account`,
      });
    }
  };

  return (
    <>
      <h1 className='text-2xl font-semibold'>Account</h1>
      <div className='flex flex-col'>
        <div className='border border-zinc-300 p-2 rounded-xl mt-5'>
          <h1 className='text-lg font-semibold'>Admin Information</h1>
          <div className='flex flex-col gap-3 mt-10'>
            <h2 className='text-zinc-600'><span className='font-semibold'>ID:</span> {user?.id}</h2>
            <h2 className='text-zinc-600'><span className='font-semibold'>Username:</span> {user?.name}</h2>
            <h2 className='text-zinc-600'><span className='font-semibold'>Password:</span> ******----</h2>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button className='bg-main text-white py-2 px-4 mt-10 rounded-lg hover:bg-main'>Edit Account</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Update Admin Account</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Username" {...field} />
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
                          <Input type="password" placeholder="Password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className='bg-main hover:bg-main'>Submit</Button>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Account;
