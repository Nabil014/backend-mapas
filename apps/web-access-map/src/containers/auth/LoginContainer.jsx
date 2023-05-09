import React from 'react'
import { useForm } from 'react-hook-form'
import authImage from '../../../public/img/authImage.jpg'
import responsiveImage from '../../../public/img/responsiveImage.jpg'
import ButtonLogin from '../../components/auth/ButtonLogin'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LoginUser } from '../../redux/auth/thunks'

export default function LoginContainer () {
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    dispatch(LoginUser(data))
  }

  return (
    <div className='flex flex-col-reverse justify-center items-center gap-80 h-screen font-poppi   md:flex-row'>
      <div className='justify-center items-center h-44 md:w-screen md:items-stretch md:basis-1/2 lg:basis-1/2'>
        <h1 className='text-sky-500 -mt-[85%] text-5xl text-center -ml-[1.6%]  md:-mt-[37%] md:mb-7 md:ml-[50%] md:text-6xl lg:text-7xl lg:mr-[60] 2xl:ml-[45%]'>AccesMap</h1>
        <section className='basi justify-center items-center p-5 ml-[17.5%] text-2xl w-[80%]  md:w-[130%] md:ml-[52%] md:self-center lg:ml-[36%] 2xl:ml-[14.4%]'>
          <h2 className='text-center text-4xl -ml-[3%] mr-[30%] md:ml-[1.5%] md:text-5xl lg:text-5xl lg:ml-[20%] 2xl:ml-[25%]'>Welcome!</h2>
          <span className='text-gray-600 text-sm -ml-[11%] text-center md:-ml-[23%] md:text-2xl  lg:text-lg lg:ml-[12%] xl:ml-[13%] xl:text-gray-600 2xl:ml-[20.5%]'>Sign by entering your information</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mt-5'>
              <input
                type='text'
                {...register('username', {
                  required: true,
                  maxLength: 30
                })}
                placeholder='Username'
                autoFocus
                className='bg-gray-100 p-1 rounded-lg text-lg ml-[-16.7%] w-[108.7%] md:-ml-[20%] md:p-2 lg:ml-[-10%] xl:ml-[-9%] 2xl:p-3 2xl:w-[80%] 2xl:ml-[7.8%]'
              />
              {errors.username?.type === 'required' && (<p className='text-sm text-red-600 -ml-[17%] md:-ml-[10.2%] md:text-lg lg:-ml-[10%] xl:ml-[-7%] xl:text-lg 2xl:ml-[9%] 2xl:text-2xl'>Username is required</p>)}
              {errors.username?.type === 'maxLength' && (<p className='text-sm text-red-600 -ml-[17.5%] md:-ml-[10.2%] md:text-lg xl:ml-[-8%] xl:text-lg 2xl:ml-[9%] 2xl:text-2xl'>Username must have at least 10 characteres</p>)}
            </div>
            <div className='mt-1'>
              <input
                type='password'
                {...register('password', {
                  required: true
                })}
                placeholder='Password'
                className='bg-gray-100 p-1 mt-2 rounded-lg text-lg ml-[-16.7%] w-[108.7%] md:-ml-[20%] md:p-2 lg:ml-[-10%] xl:ml-[-9%] 2xl:p-3 2xl:w-[80%] 2xl:ml-[7.8%]'
              />
              {errors.password?.type === 'required' && (<p className='text-sm text-red-600 -ml-[17%] md:-ml-[10.2%] md:text-lg xl:-ml-[8%] xl:text-lg 2xl:ml-[9%] 2xl:text-2xl'>Password is required</p>)}
            </div>
            <p className='font-medium text-gray-600 text-sm -ml-[19.3%] mt-2 sm:-ml-10 md:text-base md:-ml-[20%] md:mt-2 xl:text-base lg:-ml-[10%] xl:-ml-[8%] xl:mt-2 2xl:text-lg 2xl:ml-[8%] 2xl:mt-2'>
              Need an AccessMap account?
              <NavLink className=' text-blue-500' to='/register'>
                Create Acount
              </NavLink>
            </p>
            <ButtonLogin />
          </form>
        </section>
      </div>
      <div className='bg-black h-96 w-full md:h-screen'>
        <img src={authImage} className='hidden md:block lg:block object-cover float-left shadow-2xl w-screen h-full  ' />
        <img src={responsiveImage} className='md:hidden sm:block object-cover float-left shadow-2xl w-screen h-full  ' />
      </div>
    </div>
  )
}
