import React from 'react'
import FormRegisterContainer from './FormRegisterContainer'

export default function RegisterContainer () {
  return (
    <div>
      <h1 className='text-center text-sky-500 font-poppi text-4xl mt-24 font-bold sm:hidden'>AccessMap</h1>
      <h2 className='text-center font-poppi text-3xl mt-4 font-bold sm:hidden'>Create your account</h2>
      <div className='flex flex-col md:h-screen md:flex-wrap md:flex-row-reverse md:justify-center md:items-center'>
        <section className='w-full  md:w-1/2 md:basis-1/2  md:border-2 xl:p-5 2xl:p-5'>
          <h1 className='hidden sm:text-center sm:text-sky-500 sm:font-poppi sm:text-4xl sm:mt-24 sm:font-bold sm:block md:text-5xl md:text-sky-500 md:font-poppi md:font-bold md:text-center xl:mt-3'>AccessMap</h1>
          <h3 className='hidden sm:text-center sm:font-poppi sm:text-3xl sm:mt-4 sm:font-bold  sm:block md:text-4xl md:text-black md:font-poppi md:font-bold md:text-center xl:mt-3'>Create your account</h3>
          <FormRegisterContainer />
          <div className='flex gap-2 items-stretch mb-1 ml-[17%] md:ml-[31.5%]'>
            <p className='mt-2 ml-[9.5%] text-sky-500 font-semibold text-sm self-center sm:text-xl md:text-center md:-ml-[15%] lg:-ml-[10%] xl:-ml-[1%]'>Already have an account?</p>
            {/* Redirección 👇 al login */}
            <p className='mt-2 self-center text-sky-500 font-medium text-sm sm:text-xl md:text-center'>Log in</p>
          </div>
        </section>
        <section className='bg-slate-200 w-full sm:w-1/2 hidden sm:hidden md:flex md:basis-1/2 md:border-2'>
          <div className='p-7 xl:p-5 2xl:p-5'>
            <h2 className='md:mt-5 md:text-6xl md:font-bold md:font-poppi 2xl:mt-8'>Access here and find your</h2>
            <h2 className='md:mt-5 md:text-5xl font-bold md:font-poppi 2xl:mb-20'>perfect place</h2>
            <ul className='md:mt-5 md:text-gray-500 md:ml-4 md:text-2xl md:mb-5 xl:text-4xl 2xl:mb-8'>
              <li className='md:mt-3 xl:mt-5'>Find the best place.</li>
              <li className='md:mt-3 xl:mt-5'>Easy and interactive use.</li>
              <li className='md:mt-3 xl:mt-5'>See what other people are talking about these places.</li>
              <li className='md:mt-3 xl:mt-5 xl:mb-14'>Comment how was your experience.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
