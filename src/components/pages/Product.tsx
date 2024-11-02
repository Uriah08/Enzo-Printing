import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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

const Product = () => {
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
                <div className='bg-main p-5 overflow-hidden mt-10 relative'>
                    <Image src={"/sidepic1.svg"} width={200} height={200} alt='side' className='absolute left-[20%]'/>
                    <h1></h1>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Product