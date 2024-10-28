import Image from 'next/image'
import React from 'react'
import { DemoCardsDrag } from './DragImages';

const Main = () => {
  return (
    <div className='h-full w-full px-5 lg:p-0 flex justify-center mt-48 relative overflow-hidden'>
        <div className='flex flex-col items-center h-full z-50'>
            <h1 className='text-xl sm:text-3xl'>You’re printing bro!</h1>
            <SvgPattern/>
            <h1 className='text-xl sm:text-3xl -mt-1 sm:mt-0'>Your One-Stop Printing Solution!</h1>
            <p className='font-light mt-5 sm:mt-10 max-w-[350px] text-sm sm:text-base text-center'>
                Welcome to ENZO your one stop solution
                for all your printing needs.
            </p>
            <button className='mt-3 sm:mt-5 py-2 px-4 bg-main rounded-full font-medium text-[#f3f3f3] sm:text-base text-sm'>
            REQUEST A QUOTE
            </button>
            {/* <div className='lg:hidden relative h-full w-full mt-20'>
        <Image src={"/papermax.svg"} width={160} height={300} alt='product' className='clip-shadow lg:w-[120px] xl:w-[160px] absolute left-0 w-[100px]'/>
            <Image src={"/mug.svg"} width={330} height={300} alt='product' className='clip-shadow lg:w-[200px] xl:w-[330px] absolute -right-[50px] w-[200px]'/>
            <Image src={"/box.svg"} width={100} height={300} alt='product' className='clip-shadow lg:w-[50px] xl:w-[100px] absolute left-[50px] md:left-[100px] mt-40 transform -rotate-12'/>
            <Image src={"/keychain.svg"} width={200} height={300} alt='product' className='clip-shadow lg:w-[100px] xl:w-[200px] absolute mt-40 right-[50px]'/>
            <Image src={"/shirt.svg"} width={300} height={300} alt='product' className='clip-shadow lg:w-[200px] xl:w-[300px] absolute mt-72 left-[50px] md:mt-40 md:-left-[100px] w-[200px] transform -rotate-45'/>
            <Image src={"/box2max.svg"} width={180} height={300} alt='product' className='clip-shadow lg:w-[150px] xl:w-[180px] absolute mt-40 md:mt-40 w-[100px] right-0 transform rotate-45'/>
        </div> */}
          <DemoCardsDrag/>
        </div>
        <div className='z-40 hidden absolute w-full lg:flex justify-between items-end mt-48'>
            <Image src={"/paper.svg"} width={160} height={300} alt='product' className='clip-shadow lg:w-[120px] xl:w-[160px]'/>
            <Image src={"/mug.svg"} width={330} height={300} alt='product' className='clip-shadow lg:w-[200px] xl:w-[330px]'/>
            <Image src={"/box.svg"} width={100} height={300} alt='product' className='clip-shadow lg:w-[50px] xl:w-[100px]'/>
            <Image src={"/keychain.svg"} width={200} height={300} alt='product' className='clip-shadow lg:w-[100px] xl:w-[200px]'/>
            <Image src={"/shirt.svg"} width={300} height={300} alt='product' className='clip-shadow lg:w-[200px] xl:w-[300px]'/>
            <Image src={"/box2.svg"} width={180} height={300} alt='product' className='clip-shadow lg:w-[150px] xl:w-[180px]'/>
        </div>
    </div>
  )
}

function SvgPattern() {
    return (
      <svg width="37" height="8" viewBox="0 0 37 8" fill="#1A90F1">
        <path
          d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
          stroke="#1A90F1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

export default Main