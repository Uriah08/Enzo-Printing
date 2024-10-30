"use client"

import { Popover, PopoverClose } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { PopoverContent, PopoverTrigger } from '@/components/ui/popover'

import Logout from '@/components/containers/AdminContainer/Logout'

type AdminProps = {
    children: React.ReactNode,
}

const AdminLayout = ({children}: AdminProps) => {

    const [selected, setSelected] = React.useState('home')

  return (
    <div className='relative w-full flex flex-col items-center'>
        <div className='top-0 p-5 w-full max-w-[1400px] flex justify-between items-center'>
        <Image src={"/logo.svg"} width={150} height={150} alt='logo'/>
        <div className='lg:flex gap-10 font-light hidden '>
            <a onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'home' ? "text-main":""}`}>DASHBOARD</a>
            <a onClick={() => setSelected("about")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>PRODUCTS</a>
            <a onClick={() => setSelected("service")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>EDIT</a>
            <a onClick={() => setSelected("product")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>FEEDBACK</a>
            <a onClick={() => setSelected("contact")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>ACCOUNT</a>
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
                    <a href='#home' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'home' ? "text-main":""}`}>HOME</a>
                    <a href='#about' onClick={() => setSelected("about")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>ABOUT</a>
                    <a href='#service' onClick={() => setSelected("service")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>SERVICES</a>
                    <a href='#product' onClick={() => setSelected("product")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>PRODUCT</a>
                    <a href='#contact' onClick={() => setSelected("contact")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>CONTACT</a>
                    </PopoverClose>
                    <div className='w-full mt-5'>
                    <Logout/>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
    <div>{children}</div>
    </div>
  )
}

export default AdminLayout