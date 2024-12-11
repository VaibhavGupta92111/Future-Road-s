import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <div className='relative h-screen flex justify-center items-center'>
      <div 
        style={{ backgroundImage: 'url("section-3-roadmap.png")' }}
        className='absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-[2px] opacity-90 '
      ></div>
      <div className='relative z-10 h-[310px] w-[270px] md:h-[300px] md:w-[500px] lg:h-[400px] lg:w-[500px] bg-white flex gap-[10px] flex-col p-[20px] md:lg:p-[30px] shadow-lg'>
        <h1 className='text-[20px] md:text-[30px] font-normal'>Log in to your Account</h1>
        <div className='flex gap-[10px] flex-col p-[10px] items-center'>
          <input
            type="text"
            placeholder='Name@company.com'
            className='h-[30px] w-[220px] md:lg:w-[400px] md:lg:h-[40px] text-[16px] hover:border-[3px] border-blue-500'
          />
          <button className='h-[30px] w-[220px] md:lg:w-[400px] md:lg:h-[40px] text-[20px] bg-blue-500 hover:bg-blue-700'>Continue</button>
          <hr className='h-[2px] w-[100px] bg-black text-center' />
        </div>
        <div className='flex flex-col justify-center items-center gap-[10px]'>
          <a href="https://www.google.com/" target='_blank' rel='noopener noreferrer'>
            <button className='flex gap-x-[5px] text-[15px] md:lg:gap-x-[50px] md:lg:text-[20px] p-[5px] hover:bg-slate-300'>
              <img src="icons8-google.svg" alt="Google" className='h-[20px] md:lg:h-[30px]' />
              Log in with Google
            </button>
          </a>
          <a href="https://www.facebook.com/" target='_blank' rel='noopener noreferrer'>
            <button className='flex gap-x-[5px] text-[15px] md:lg:gap-x-[50px] md:lg:text-[20px] p-[5px] ml-[17px] hover:bg-slate-300'>
              <img src="facebook-brands-solid.svg" alt="Facebook" className='h-[20px] md:lg:h-[40px]' />
              Log in with Facebook
            </button>
          </a>
        </div>
        <h1 className='pt-[10px] text-[16px] md:lg:text-[20px]'>
          New to Future Road's? <Link to="/Signup" className='text-blue-500'>Sign up</Link>
        </h1>
      </div>
    </div>
  )
}
export default Login