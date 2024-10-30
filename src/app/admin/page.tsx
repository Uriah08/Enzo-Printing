"use client"

import { useEffect } from 'react';
// import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

import { Popover, PopoverClose } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import Logout from '@/components/containers/AdminContainer/Logout'
import Dashboard from '@/components/containers/AdminContainer/Dashboard';
import Products from '@/components/containers/AdminContainer/Products';
import Edit from '@/components/containers/AdminContainer/Edit';
import Feedback from '@/components/containers/AdminContainer/Feedback';
import Account from '@/components/containers/AdminContainer/Account';

const AdminPage = () => {

  const isAuthenticated = true

  // const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  const [selected, setSelected] = React.useState('products')

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  if(!isAuthenticated) return <div>Not Logged in</div>

  return (
    <div className='relative w-full flex flex-col items-center'>
        <div className='top-0 p-5 w-full max-w-[1400px] flex justify-between items-center'>
        <Image src={"/logo.svg"} width={150} height={150} alt='logo'/>
        <div className='lg:flex gap-10 font-light hidden '>
            <a onClick={() => setSelected("dashboard")} className={`cursor-pointer ${selected === 'dashboard' ? "text-main":""}`}>DASHBOARD</a>
            <a onClick={() => setSelected("products")} className={`cursor-pointer ${selected === 'products' ? "text-main":""}`}>PRODUCTS</a>
            <a onClick={() => setSelected("edit")} className={`cursor-pointer ${selected === 'edit' ? "text-main":""}`}>EDIT</a>
            <a onClick={() => setSelected("feedback")} className={`cursor-pointer ${selected === 'feedback' ? "text-main":""}`}>FEEDBACK</a>
            <a onClick={() => setSelected("account")} className={`cursor-pointer ${selected === 'account' ? "text-main":""}`}>ACCOUNT</a>
        </div>
        <div className='lg:block hidden'>
        <Logout/>
        </div>
        <Popover>
            <PopoverTrigger asChild>
                <div className='lg:hidden cursor-pointer p-5 border-gray-500'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                </div>
            </PopoverTrigger>
            <PopoverContent align='end' className='lg:hidden'>
                <div className='flex flex-col gap-3'>
                    <PopoverClose className='flex flex-col gap-3 focus:border-none'>
                    <a href='#home' onClick={() => setSelected("dashboard")} className={`cursor-pointer ${selected === 'dashboard' ? "text-main":""}`}>DASHBOARD</a>
                    <a href='#about' onClick={() => setSelected("products")} className={`cursor-pointer ${selected === 'products' ? "text-main":""}`}>PRODUCTS</a>
                    <a href='#service' onClick={() => setSelected("edit")} className={`cursor-pointer ${selected === 'edit' ? "text-main":""}`}>EDIT</a>
                    <a href='#product' onClick={() => setSelected("feedback")} className={`cursor-pointer ${selected === 'feedback' ? "text-main":""}`}>FEEDBACK</a>
                    <a href='#contact' onClick={() => setSelected("account")} className={`cursor-pointer ${selected === 'account' ? "text-main":""}`}>ACCOUNT</a>
                    </PopoverClose>
                    <div className='w-full mt-5'>
                    <Logout/>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
    <div className='w-full h-full place-self-center max-w-[1400px] p-5 flex flex-col'>
      {selected === 'dashboard' && <Dashboard/>}
      {selected === 'products' && <Products/>}
      {selected === 'edit' && <Edit/>}
      {selected === 'feedback' && <Feedback/>}
      {selected === 'account' && <Account/>}
    </div>
    </div>
  );
}

export default AdminPage