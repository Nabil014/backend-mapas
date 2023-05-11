import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonRegister from '../../components/auth/ButtonRegister'
import { useDispatch } from 'react-redux'
import { RegisterUser } from '../../redux/auth/thunks'

export default function FormRegisterContainer () {
  const dispatch = useDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    dispatch(RegisterUser(data))
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='sm:flex-col'>

      <div className=' md:flex-col xl:flex'>
        <div className='mt-5'>
          <input
            type='text' {...register('name', {
              required: true
            })}
            placeholder='Name'
            autoFocus
            className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] lg:p-2'
          />
          {errors.name?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Name is required</p>)}
        </div>

        <div className='mt-3 md:mt-3'>
          <input
            type='text' {...register('lastname', {
              required: true
            })}
            placeholder='Lastname'
            className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] lg:p-2'
          />
          {errors.lastname?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Lastname is required</p>)}
        </div>
      </div>

      <div className='md:flex-col'>
        <div className='mt-3'>
          <input
            type='text' {...register('username', {
              required: true
            })}
            placeholder='Username'
            className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] md:ml-[13%] lg:p-2'
          />
          {errors.username?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Username is required</p>)}
        </div>
      </div>

      <div className='mt-3'>
        <input
          type='email' {...register('email', {
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Invalid email address'
            }
          })}
          placeholder='Email'
          className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] md:ml-[13%] md:w-[76.4%] lg:p-2'
        />
        {errors.email?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Email is required</p>)}
        {errors.email && (<p className='font-semibold text-sm text-red-600 ml-[14%] xl:text-xl'>{errors.email.message}</p>)}
      </div>

      <div className='md:flex-col'>
        <div className='mt-3'>
          <input
            type='password' {...register('password', {
              required: true
            })}
            placeholder='Password'
            className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] lg:p-2'
          />
          {errors.password?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Password is required</p>)}
        </div>

        <div className='mt-3'>
          <input
            type='password' {...register('confirmPassword', {
              required: true
            })}
            placeholder='Confirm Password'
            className='bg-gray-100 p-1 rounded-lg text-xl ml-[13%] w-[76%] lg:p-2'
          />
          {errors.confirmPassword?.type === 'required' && (<p className='font-semibold text-sm text-red-600 ml-[13.4%] xl:text-xl'>Password is required</p>)}
        </div>
      </div>

      <ButtonRegister />
      <p className='mt-[5.2%] text-xs text-center text-gray-400 font-semibold md:text-lg'>By creating an account, I agree to AccessMap's Website Terms</p>
      <hr className='mt-1 w-[90%] ml-[5%]' />
    </form>
  )
}
