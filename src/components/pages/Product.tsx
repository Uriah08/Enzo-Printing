"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
    {
        image:"/products/mugsample1.jpg",
        title:"Quote Mug",
        tag:"Mug",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo modi quae quam tempora vel"
    },
    {
        image:"/products/mugsample1.jpg",
        title:"Quote Mug",
        tag:"Mug",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo modi quae quam tempora vel"
    },
    {
        image:"/products/mugsample1.jpg",
        title:"Quote Mug",
        tag:"Mug",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo modi quae quam tempora vel"
    },
    {
        image:"/products/mugsample1.jpg",
        title:"Quote Mug",
        tag:"Mug",
        description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nemo modi quae quam tempora vel"
    },
]

const testimonials = [
    {
        image:"/products/mugsample1.jpg",
        name:"John Doe",
        title:"Customer",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, libero vel tristique consectetur, ipsum nunc condimentum velit, at eleifend enim ipsum id nisi. Donec vel est vel justo tincidunt pulvinar."
    },
    {
        image:"/about.png",
        name:"Jane Doe",
        title:"Customer",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor, libero vel tristique consectetur, ipsum nunc condimentum velit, at eleifend enim ipsum id nisi. Donec vel est vel justo tincidunt pulvinar."
    },
]

const Product = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const handleNext = () => {
        stopAutoplay();
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        stopAutoplay();
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => stopAutoplay();
    }, []);

    const { image, name, title, description } = testimonials[currentIndex];

  return (
    <section id='product' className='bg-white h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl pt-20 w-full'>Products Sample</h1>
        <div className='max-w-[1200px] w-full h-full p-5 sm:p-10'>
            <Image src={"/logo.svg"} width={200} height={200} alt='logo' className='place-self-center'/>
            <div className='flex w-full justify-center mt-5'>
                <Link href={'/product'} className='bg-main duration-200 transition-all hover:bg-main2 text-white px-5 py-2 rounded-lg'>View All</Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 rounded-sm overflow-hidden'>
                {products.map((product, i) => (
                    <div key={i} className='bg-[#f3f3f3] w-full flex'>
                    <div className='w-1/2'>
                    <Image src={product.image} width={300} height={300} alt='logo' className='object-cover h-full'/>
                    </div>
                    <div className='w-1/2 flex flex-col p-3 h-full'>
                        <h1 className='text-xl font-semibold'>
                            {product.title}
                        </h1>
                        <h2 className='bg-main px-3 py-1 rounded-xl w-fit text-white font-light mt-2'>
                        {product.tag}
                        </h2>
                        <p className='text-sm text-zinc-600 font-light text-justify mt-5'>{product.description}</p>
                        <button className='justify-self-end place-self-end bottom-0 bg-white border py-1 px-2 rounded-xl mt-5 font-light duration-200 transition-all hover:bg-main'>
                            Inquire
                        </button>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <div className='max-w-[1200px] flex flex-col w-full h-full p-5 sm:p-10 mb-20'>
            <h1 className='text-2xl font-semibold'><span className='text-main'>Dedicated Testimonials</span> from our Customers.</h1>
            <div className='flex flex-col'>
                <div className='bg-main p-5 overflow-y-hidden mt-10 relative flex justify-center w-full'>
                <Image src={"/quote.svg"} width={50} height={50} alt='side' className='absolute right-[10%]'/>
                    <Image src={"/sidepic1.svg"} width={200} height={200} alt='side' className='absolute left-[20%]'/>
                    <div className='w-full flex flex-col items-center z-10'>
                    <Image src={image} width={50} height={50} alt='profile' className='rounded-full w-[50px] h-[50px]'/>
                    <h1 className='text-[#f4f4f4] font-semibold mt-3'>{name}</h1>
                    <h2 className='text-[#eeeeee]'>{title}</h2>
                    <p className='text-sm px-10 text-[#f4f4f4] font-light text-center mt-5 w-full max-w-[800px]'>
                        &quot;{description}&quot;
                    </p>
                    <div className='flex w-full justify-between absolute top-1/2 -translate-y-1/2'>
                        <ChevronLeft onClick={handlePrev} className='text-[#f4f4f4] cursor-pointer' size={40}/>
                        <ChevronRight onClick={handleNext} className='text-[#f4f4f4] cursor-pointer' size={40}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Product