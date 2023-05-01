import React from 'react'

export default function ButtonLogin () {
  return (
    <div>
      <div className='transition delay-150 duration-300 ease-in-out'>
        <button type='submit' className='bg-blue-500 mt-9 p-1 text-lg ml-[-16.7%] w-[108.7%] rounded-2xl text-white dark:hover:bg-blue-600 md:p-2 md:md:-ml-[20%] lg:ml-[-9.8%] lg:p-3 xl:ml-[-9%] xl:p-2 2xl:w-[80%] 2xl:ml-[7.8%]'> <p className='font-poppi text-center  xl:text-2xl xl:ml-28 xl:mr-24 xl:text-center'>Login</p></button>
      </div>
      <div className='transition delay-150 duration-300 ease-in-out'>
        <button type='submit' className='bg-white border-2 -mt-[-5%] border-blue-500 p-1 text-lg ml-[-16.7%] w-[108.7%] rounded-2xl text-black dark:hover:bg-blue-100 md:-mt-[-4%] md:md:-ml-[20%] lg:ml-[-9.8%] lg:p-3 xl:ml-[-9%] xl:p-2 2xl:w-[80%] 2xl:ml-[7.8%] 2xl:mt-4'><p className='font-poppi text-center  xl:text-2xl xl:ml-28 xl:mr-24 xl:text-center'>Go Back</p></button>
      </div>
    </div>
  )
}
