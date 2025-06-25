import React from 'react'
import { HeroImage } from '../assets/images'

const Hero = () => {
  return (
    <section className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 pb-10 px-4'>
        <div className='flex flex-col justify-center'>
            <div className='text-center lg:text-left'>
                <h1 className='text-gray-4 font-light text-3xl lg:text-6xl'>PROJECT</h1>
                <h2 className='text-gray-1 font-bold text-3xl lg:text-6xl'>Lorum</h2>
            </div>
        </div>
        <div className='col-span-2 relative'>
          <div className='py-3 px-5 lg:py-6 lg:px-10 absolute bottom-0 left-0 bg-white'>
            <a href='/projects' className='flex items-center gap-2'>
              <h5 className='font-roboto font-normal uppercase text-gray-1'>View Project</h5>
              <img src="/arrow-right.svg" alt="arrow right" className='w-6 h-6'/>
            </a>
          </div>
            <img src={HeroImage} alt="architecture image" className='w-full h-[50vh] lg:h-[90vh] object-cover object-center' />
        </div>
    </section>
  )
}

export default Hero