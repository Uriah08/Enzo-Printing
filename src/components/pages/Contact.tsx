import Image from 'next/image'
import React from 'react'
import { PhoneCall } from 'lucide-react'

const Contact = () => {
  return (
    <section id='contact' className='h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl py-20 w-full'>Contact</h1>
        <div className='max-w-[1200px] w-full h-full p-5 sm:p-10 bg-white flex md:flex-row flex-col gap-5'>
            <div className='w-full md:w-1/3 flex justify-center md:justify-start'>
                <Image src={"/logo.svg"} width={200} height={200} alt='logo'/>
            </div>
            <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
                <h1 className='text-zinc-600 text-sm md:text-base'>ST. Sample 304</h1>
                <h1 className='text-zinc-600 text-sm md:text-base'>Bancaan</h1>
                <h1 className='text-zinc-600 text-sm md:text-base'>Naic Cavite</h1>
                <h1 className='mt-2 text-zinc-600'>
                    Monday - Saturday 8AM - 10PM
                </h1>
            </div>
            <div className='w-full md:w-1/3 flex flex-col items-center md:items-start'>
            <div className='flex items-center gap-3 text-zinc-600'>
            <h1 className='text-sm md:text-base'>+63 923 456 1789</h1>
            <PhoneCall size={30} className='text-main'/>
            </div>
                <div className='flex gap-3 mt-5 text-zinc-600'>
                    <h2 className='text-xs'>Email:</h2>
                    <h1 className=' text-sm md:text-base'>sampleemail@gmail.com</h1>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact