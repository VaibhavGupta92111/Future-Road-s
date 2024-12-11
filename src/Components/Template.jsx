import React from 'react'
import { Link } from 'react-router-dom'

const Template = () => {
  return (
    <section>


    <div className='flex flex-col justify-center items-center p-[30px] gap-y-[30px] lg:gap-y-[50px] pb-[100px]'>
    <p className='text-neutral-100 font-bold text-center text-[18px] md:text-[30px] lg:text-[40px]'>Design from one of our roadmap templates</p>
    <p className='text-neutral-100 font-bold text-center text-[12px] md:text-[18px] lg:text-[20px]'>Choose from hundreds of roadmaps templates.<button className='text-cyan-400'>See all roadmap templates</button></p>
   <Link to="/CREATE ROADMAPS">
   <img src="section-3-roadmap.png" alt="Sorry" className='h-[110px] w-[300px] hover:w-[450px] hover:h-[140px] md:h-[400px] md:w-[700px] lg:w-[1000px] lg:h-[700px] lg:hover:w-[1200px] lg:hover:h-[800px] md:hover:h-[600px] md:hover:w-[800px]' />
    </Link>
    </div>
    
 </section>  
  )
}

export default Template