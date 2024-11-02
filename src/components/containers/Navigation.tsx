"use client"

import { Popover, PopoverClose } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { PopoverContent, PopoverTrigger } from '../ui/popover'
import { User } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {

    const [selected, setSelected] = React.useState('home')
  return (
    <div className='absolute top-0 p-5 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] flex justify-between items-center'>
        <Image src={"/logo.svg"} width={150} height={150} alt='logo'/>
        <div className='lg:flex gap-10 font-light hidden '>
            <a href='#home' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'home' ? "text-main":""}`}>HOME</a>
            <a href='#about' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>ABOUT</a>
            <a href='#service' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>SERVICES</a>
            <a href='#product' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>PRODUCT</a>
            <a href='#contact' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>CONTACT</a>
        </div>
        <div className='lg:flex gap-3 items-center hidden'>
        <Link href={'/signin'} className='cursor-pointer'>
        <User size={30} className='text-zinc-600'/></Link>
        <button className=' py-2 px-4 bg-main rounded-full duration-200 transition-all hover:bg-main2 font-medium text-[#f3f3f3]'>
            REQUEST A QUOTE
        </button>
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
                    <a href='#about' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>ABOUT</a>
                    <a href='#service' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>SERVICES</a>
                    <a href='#product' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>PRODUCT</a>
                    <a href='#contact' onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>CONTACT</a>
                    </PopoverClose>
                    <Link href={'/signin'} className='mt-10'>ADMIN</Link>
                    <button className='py-2 px-4 bg-main rounded-full duration-200 transition-all hover:bg-main2 font-medium text-[#f3f3f3]'>
                        REQUEST A QUOTE
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    </div>  
  );
}

export default Navigation