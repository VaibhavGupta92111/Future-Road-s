import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <section>
    <div  style={{backgroundImage:'url("section-3-roadmap.png")' 
       
    }} className=' h-screen flex items-center justify-center bg-opacity-0 .'>
    
    <div className=' bg-slate-50  h-[500px] w-[300px] md:h-[540px] md:w-[450px] bg- md:p-[25px] lg:p-[30px] p-[25px] '>
    
    <div className='flex flex-col justify-center  '>
        <h1 className='text-[18px] md:text-[28px] lg:text-[28px] font-normal'>Get started with Future Road's</h1>
    <p className=' text-gray-600 pt-[10px] text-[16px]'>Create an account, it's free.</p>
    </div>
    <div className=' flex mt-[20px]  items-center md:gap-x-[10px] gap-x-[5px]'>
    <div ><input type="text" placeholder='First Name*' className=' h-[30px] w-[125px] md:h-[40px] md:w-[180px] border-[1px] border-gray-600 rounded-sm p-[10px] text-[16px]' /></div>
    <div><input type="text" placeholder='Last Name*' className=' h-[30px] w-[125px] md:h-[40px] md:w-[180px] border-[1px] border-zinc-600 rounded-sm p-[10px]  text-[16px]' /></div>
    </div>
    
    <div className='flex flex-col gap-[10px] mt-[10px] justify-center '>
    <input type="text" placeholder='Name@Company.com*' className='h-[30px] w-[260px] md:h-[40px] md:w-[370px] lg:h-[40px] lg:w-[370px] border-[1px] border-zinc-600 rounded-sm p-[10px] text-[16px]' />
    <input type="text" placeholder='Password*' className='h-[30px] w-[260px] border-[1px] md:h-[40px] md:w-[370px] lg:h-[40px] lg:w-[370px] border-zinc-600 rounded-sm p-[10px] text-[16px]'/>
    <Link to="/CREATE ROADMAPS">
    <button className='border-[1px] border-zinc-600 h-[30px] w-[260px] md:h-[40px] md:w-[370px] lg:h-[40px] lg:w-[370px] text-neutral-100 bg-blue-500 hover:bg-blue-900 '>Sign Up</button>
    </Link>
    </div>
    
    
    <div className='flex flex-col items-center justify-center mt-[20px]'>
    <div className='h-[1px] w-[100px]  mb-[15px] bg-black '></div>
    
    <a href="https://www.google.com/ " target='blank'> <button className='flex gap-x-[5px] text-[15px]  md:lg:gap-x-[40px] md:lg:text-[18px] p-[5px]  hover:bg-slate-300' > <img src="icons8-google.svg" alt="" className='h-[20px] md:lg:h-[30px]' />
    Sign up with Google</button></a>
    </div>
    
    <p className='w-[300px] pt-[20px]'>Already have an account?  <button className='text-blue-500'>Log in here</button></p>
    <p className='text-[12px]  text-gray-600 text-start md:lg:w-[350px]'>By signing up, you agree to our <u> Terms of Service, Privacy Policy</u> and to receive Future Road's  emails, newsletters & updates. You also acknowledge that Future Road's uses cookies to give the best user experience.</p>
    </div>
    </div>
    </section>
  )
}

export default Signup