import React from 'react'
import Navigation from '../containers/Navigation'
import Main from '../containers/HeroContainers/Main'

const Hero = () => {
  return (
    <section id='home' className='h-[100vh] relative w-full flex flex-col overflow-x-hidden'>
        <Navigation/>
        <Main/>
    </section>
  )
}

export default Hero