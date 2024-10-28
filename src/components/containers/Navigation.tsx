"use client"

import { Popover } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { PopoverContent, PopoverTrigger } from '../ui/popover'

const Navigation = () => {

    const [selected, setSelected] = React.useState('home')
  return (
    <div className='absolute top-0 p-5 left-1/2 transform -translate-x-1/2 w-full max-w-[1400px] flex justify-between items-center'>
        <Image src={"/logo.svg"} width={150} height={150} alt='logo'/>
        <div className='lg:flex gap-10 font-light hidden '>
            <h1 onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'home' ? "text-main":""}`}>HOME</h1>
            <h1 onClick={() => setSelected("about")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>ABOUT</h1>
            <h1 onClick={() => setSelected("service")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>SERVICES</h1>
            <h1 onClick={() => setSelected("product")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>PRODUCTS</h1>
            <h1 onClick={() => setSelected("contact")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>CONTACT</h1>
        </div>
        <button className=' lg:block hidden py-2 px-4 bg-main rounded-full font-medium text-[#f3f3f3]'>
            REQUEST A QUOTE
        </button>
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
                    <h1 onClick={() => setSelected("home")} className={`cursor-pointer ${selected === 'home' ? "text-main":""}`}>HOME</h1>
                    <h1 onClick={() => setSelected("about")} className={`cursor-pointer ${selected === 'about' ? "text-main":""}`}>ABOUT</h1>
                    <h1 onClick={() => setSelected("service")} className={`cursor-pointer ${selected === 'service' ? "text-main":""}`}>SERVICES</h1>
                    <h1 onClick={() => setSelected("product")} className={`cursor-pointer ${selected === 'product' ? "text-main":""}`}>PRODUCTS</h1>
                    <h1 onClick={() => setSelected("contact")} className={`cursor-pointer ${selected === 'contact' ? "text-main":""}`}>CONTACT</h1>
                    <button className='py-2 px-4 bg-main rounded-full font-medium text-[#f3f3f3] mt-10'>
                        REQUEST A QUOTE
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    </div>  
  );
}

export default Navigation