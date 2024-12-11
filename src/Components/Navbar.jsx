import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);
const menu = ["About", "Blogs", "Pricing", "Contact Us"];
  return (
    <div>
      <div className='bg-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between p-[5px] md:p-[10px]'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <div className='flex items-center'>
            <img src="icons8-roadmap-100.png" alt="logo" className='w-16 h-16 md:w-20 md:h-20' />
            <p className='text-2xl text-neutral-100 font-serif ml-2'>Future Road's</p>
          </div>
          <button
            className='md:hidden text-neutral-100 focus:outline-none'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        
        <div className={`flex-col md:flex md:flex-row gap-2 md:gap-8 ${isOpen ? 'flex' : 'hidden'} md:flex mt-3 md:mt-0`}>
          {menu.map((item, index) => (
            <a
              key={index}
              href={`/${item.toLowerCase().replace(' ', '-')}`}
              className='text-lg text-neutral-100 font-serif hover:text-indigo-500'
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item}
            </a>
          ))}
        </div>

        <div className={` md:flex md:flex-row items-center gap-2 md:gap-4 mt-3 md:mt-0 text-lg font-serif text-neutral-100 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link to="/Login">
      <button className='hover:text-indigo-500' onClick={() => setIsOpen(false)}>Log in</button></Link>
          <Link to="/Signup">
          <button className='md:bg-indigo-600 h-12 px-5 rounded-2xl hover:bg-indigo-800' onClick={() => setIsOpen(false)}>Sign up for free</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar