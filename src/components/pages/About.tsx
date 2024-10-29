import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-zinc-50 h-full w-full flex flex-col items-center justify-center'>
      <h1 className='text-center text-2xl pt-20 w-full'>About Us</h1>
      <div className='max-w-[1200px] w-full h-full p-5 sm:p-10 flex flex-col lg:flex-row'>
        <div className='w-full max-w-[500px] lg:w-1/2 mt-32 pr-10'>
          <h1 className='text-2xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
          <p className='mt-10 text-zinc-600 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptate suscipit perferendis eveniet dolor, amet quia iusto exercitationem porro autem eaque rem laborum, fuga magnam non asperiores enim obcaecati vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste incidunt, aspernatur quam temporibus, dicta accusantium delectus officiis!</p>
          <div className='flex gap-3 mt-5'>
            <a target='_blank' href='#' className='cursor-pointer w-10 h-10 group rounded-full border border-main duration-200 transition-all hover:bg-main flex justify-center items-center'>
              <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.75 13.6429H11.6071L12.75 9.07143H8.75V6.78571C8.75 5.60857 8.75 4.5 11.0357 4.5H12.75V0.66C12.3774 0.610857 10.9706 0.5 9.48486 0.5C6.382 0.5 4.17857 2.39371 4.17857 5.87143V9.07143H0.75V13.6429H4.17857V23.3571H8.75V13.6429Z" fill="#1A90F1" className='duration-200 transition-all group-hover:fill-[#f3f3f3]'/>
              </svg>
            </a> 
            <a target='_blank' href='#' className='cursor-pointer w-10 h-10 rounded-full border border-main duration-200 transition-all group hover:bg-main flex justify-center items-center'>
              <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.074 3.48543C14.2459 2.52079 13.7894 1.28219 13.7895 0H10.0453V15.326C10.017 16.1556 9.67391 16.9415 9.08838 17.518C8.50286 18.0945 7.72069 18.4164 6.90689 18.4159C5.18622 18.4159 3.75638 16.9822 3.75638 15.2024C3.75638 13.0766 5.76786 11.4822 7.83992 12.1372V8.23156C3.65944 7.66301 0 10.9754 0 15.2024C0 19.3182 3.34439 22.2474 6.89477 22.2474C10.6996 22.2474 13.7895 19.0957 13.7895 15.2024V7.42818C15.3078 8.54036 17.1307 9.13709 19 9.13381V5.31467C19 5.31467 16.7219 5.42591 15.074 3.48543Z" fill="#1A90F1" className='duration-200 transition-all group-hover:fill-[#f3f3f3]'/>
              </svg>
            </a>
          </div>
        </div>
        <div className='w-full lg:w-1/2 mt-10 sm:mt-32 flex justify-end lg:justify-start'>
          <Image src={"/about.png"} alt='about' height={500} width={500}/>
        </div>
      </div>
      <div className='flex justify-between flex-wrap w-full max-w-[1200px] px-5 sm:px-10 gap-5 mt-10 mb-20'>
        <div className='flex flex-col flex-1 min-w-[250px] items-start sm:items-center'>
        <Image src={"/payment.svg"} alt='about' height={50} width={50}/>
        <h1 className='font-semibold text-lg mt-10'>Online Payments Available</h1>
        <p className='text-zinc-600 pr-20 sm:px-0 mt-3 text-sm font-light text-start sm:text-center'>Provide a variety of print sizes and custom dimensions, allowing flexibility for unique projects.</p>
        </div>
        <div className='flex flex-col flex-1 min-w-[250px] items-end sm:items-center justify-center'>
        <Image src={"/clock.svg"} alt='about' height={50} width={50}/>
        <h1 className='font-semibold text-lg mt-7'>24-Hour Turnaround</h1>
        <p className='text-zinc-600 pl-20 sm:px-0 mt-3 text-sm font-light text-end sm:text-center'> Guaranteed printing completion within 24 hours for standard orders, ensuring quick delivery for your customers.</p>
        </div>
        <div className='flex flex-col flex-1 min-w-[250px] items-start sm:items-center justify-center'>
        <Image src={"/quality.svg"} alt='about' height={50} width={50}/>
        <h1 className='font-semibold text-lg mt-9'>Premium Finishes</h1>
        <p className='text-zinc-600 pr-20 sm:px-0 mt-3 text-sm font-light text-start sm:text-center'> Offer premium finishes, like matte, gloss, and UV coating, giving customers options for a professional look.</p>
        </div>
        <div className='flex flex-col flex-1 min-w-[250px] items-end sm:items-center justify-center'>
        <Image src={"/custom.svg"} alt='about' height={50} width={50}/>
        <h1 className='font-semibold text-lg mt-3'>Custom Print Sizes</h1>
        <p className='text-zinc-600 pl-20 sm:px-0 mt-3 text-sm font-light text-end sm:text-center'>Provide a variety of print sizes and custom dimensions, allowing flexibility for unique projects.</p>
        </div>
      </div>
    </section>
  )
}

export default About