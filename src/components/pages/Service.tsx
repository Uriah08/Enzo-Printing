import Image from 'next/image'
import React from 'react'

const services = [
    {
        image: "/bondpaper.svg",
        title: "Paper Prints",
        description: "High-quality paper ink prints for all your document needs, perfect for office and school."
    },
    {
        image: "/book.svg",
        title: "Book Printing",
        description: "Get professionally printed books with durable binding and crisp pages for any purpose."
    },
    {
        image: "/mugs.svg",
        title: "Custom Mugs",
        description: "Personalized mug printing with vibrant designs that last, ideal for gifts or branding."
    },
    {
        image: "/shirts.svg",
        title: "T-shirt Printing",
        description: "Design your own t-shirts with bold, long-lasting prints, great for events and promotions."
    },
    {
        image: "/picture.svg",
        title: "Photo Printing",
        description: "Print your favorite photos with vivid colors and quality finishes in any size you choose."
    },
    {
        image: "/sticker.svg",
        title: "Sticker Printing",
        description: "Create custom stickers in all shapes and sizes, perfect for branding or personal projects."
    },
    {
        image: "/scan.svg",
        title: "Document Scanning",
        description: "Fast and accurate scanning services to digitize documents for easy storage and access."
    },
];

const Service = () => {
  return (
    <section id='service' className='h-full w-full flex flex-col items-center justify-center'>
        <h1 className='text-center text-2xl py-20 w-full'>Services</h1>
        <Image src={"/design.svg"} height={1500} width={1500} alt='design' className='pr-10 place-self-start -ml-8 scale-110 sm:scale-100 sm:ml-0 md:block hidden'/>
        <Image src={"/design2.svg"} height={1500} width={1500} alt='design' className='place-self-start sm:ml-0 md:hidden block'/>
        <div className='max-w-[1200px] w-full h-full p-5 sm:p-10 flex flex-col lg:flex-row gap-5'>
        <div className='w-full lg:w-1/2 mt-20 sm:mt-32 flex justify-end lg:justify-start'>
          <Image src={"/about.png"} alt='about' height={500} width={500} className=''/>
        </div>
        <div className='w-full max-w-[500px] lg:w-1/2 mt-32 pr-10'>
          <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
          <p className='mt-10 text-zinc-600 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate suscipit perferendis eveniet dolor, amet quia iusto exercitationem porro autem eaque rem laborum, fuga magnam non asperiores enim obcaecati vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste incidunt, aspernatur quam temporibus, dicta accusantium delectus officiis!</p>
          <p className='mt-3 text-zinc-600 font-light'>- Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium eos</p>
          <p className='mt-3 text-zinc-600 font-light'>- Lorem ipsum dolor Accusantium eos</p>
          <p className='mt-3 text-zinc-600 font-light'>- Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div>
      <div className='bg-main rounded-full py-2 px-5 mt-20'>
        <h1 className='sm:text-2xl font-semibold px-5 text-[#f3f3f3] text-base'>
            Explore our wide range of services
        </h1>
      </div>
      <div className='max-w-[1200px] w-full h-full sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8'>
        {services.map((service,i) => (
            <div key={i} className='p-5 flex sm:flex-row flex-col md:max-w-[500px] w-full gap-7'>
                <Image src={service.image} alt={service.title} height={50} width={50} className={`${i % 2 === 0 ? 'place-self-start':'place-self-end'} sm:place-self-start`}/>
                <div className='flex flex-col gap-3'>
                    <h1 className={`${i % 2 === 0 ? 'text-start':'text-end'} font-semibold text-lg sm:text-start`}>{service.title}</h1>
                    <p className={`font-light text-zinc-600 text-sm ${i % 2 === 0 ? 'text-start':'text-end'} sm:text-start`}>{service.description}</p>
                </div>
            </div>
        ))}
        <div className='p-5 flex sm:flex-row flex-col md:max-w-[500px] w-full gap-7 bg-main sm:rounded-2xl relative overflow-hidden'>
        <div className="z-10">
        <h1 className="text-xl font-semibold text-white text-center sm:text-start leading-tight mb-2">
            Other Services will be available soon.
        </h1>
        <p className="text-white text-sm opacity-90 text-center sm:text-start">
            We&apos;re working hard to bring you new services to meet all your needs. Stay tuned for exciting updates!
        </p>
        </div>
            <Image src={'/sidepic1.svg'} width={140} height={140} alt='side' className="absolute right-[10%]"/>
        </div>
        </div>
        <div className='flex sm:flex-row flex-col mb-10 gap-3 justify-between items-center w-full max-w-[1200px] p-5'>
            <h1 className='font-light sm:text-base text-sm'>Keep updated on our <span className='text-main'>available services</span>. Check them</h1>
            <button className='text-[#f3f3f3] bg-main py-2 px-4 rounded-full duration-200 transition-all hover:bg-main2'>Check</button>
        </div>
    </section>
  );
}

export default Service