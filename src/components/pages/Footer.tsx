import React from 'react'

const Footer = () => {
  return (
    <div className='p-20 h-full w-full flex flex-col items-center justify-center'>
        <div className='max-w-[1200px] w-full h-full flex md:flex-row gap-5 flex-col justify-between items-center'>
            <h1 className='text-zinc-600'>&copy; ENZO Printing 2024. All rights reserved</h1>
            <div className='flex gap-3'>
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
    </div>
  )
}

export default Footer