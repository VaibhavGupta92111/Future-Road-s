import React from 'react'
import{ Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section>

<div className='flex justify-center flex-col items-center  pt-[100px] gap-[30px] md:gap-[50px] lg:gap-[50px] p-[25px] '>
<h1 className='font-bold text-[22px]  md:text-[50px] lg:text-[50px] text-neutral-100'>Free Online Roadmap Maker</h1>
<p 
className='font-semibold text-neutral-100 text-[16px] text-center content-center
md:text-center lg:text-center
 w-[270px] md:w-[800px] lg:w-[950px] '>Keep projects on track and communicate effectively with your team using Future Road's customizable roadmap templates. Stay aligned with your strategy and achieve your goals effortlessly.</p>

<Link to="/Signup">
<button className=' text-neutral-100 text-[25px] bg-indigo-500 md:text-[30px] lg:[30px] h-[50px] px-[20px] rounded-[20px] hover:bg-indigo-900'>CREATE ROADMAPS</button>
</Link>



<img src="roadmap-maker-1.png" alt="sorry" className='w-[290px] md:w-[800px] lg:w-[1200px] pt-[20px] pb-[50px] lg:hover:w-[1300px] hover:w-[310px] md:hover:w-[850px]' />

<p className='text-neutral-100 w-[270px] md:w-[900px] text-center text-[18px] pb-[30px]'>You don't need design experience to make a roadmap that stands out. With Future Road's, you can create a visually compelling roadmap and ensure your product plan is easy to follow.<span className='font-bold'> 40,000+ businesses have trusted Future Road's free roadmap creator tool to improve their planning!</span></p>

<div className='flex items-center flex-col gap-[30px]'>
<p className='text-[20px] text-neutral-100 '>Trusted By</p>
<img src="company-logo.svg" alt="" className='bg-gray-500 md:w-[806px] lg:w-[806px] w-[300px]' />
</div>
</div>










 </section>
  )
}

export default Hero