import React from 'react'
import { Link } from 'react-router-dom'

const Process = () => {
    const process=
    [
    
    {link:"presentation.png",text:"For your product development to go off without a hitch, you need a well-thought-out plan. A roadmap will communicate what the end result of your product should be, and the steps and tools needed to get there."},
    {link:"direction.png",text:"For your roadmap to do its job, it needs to be designed well. Your roadmap needs to be easy to follow and engaging to readers. That's why our team of professional designers do all the hard work for you – just customize your favorite template!"},
    {link:"click.png",text:"Our beginner-friendly online roadmap maker tool gives anyone the ability to make a roadmap in minutes – no design experience required. Add images, icons and photos with just a click. Upload your brand identity and more."},
    {link:"roadmap.png",text:"Use one of our fully customizable roadmap templates to create a roadmap that will guide your team well. Every design needs a solid foundation. Let us provide that for you – you just have to worry about your project development."
    }

    ]
  return (
    <>
    <div className='mt-[70px] p-[30px]'>
<div className=' flex justify-around items-center pb-[30px]'>
        
        <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src="green-plus-left.png" alt="sorry" />
       
        <p className=' md:text-[30px] text-[20px] font-bold 
        md:w-[600px] text-neutral-100 h-[120px] w-[210px] '>Make a roadmap that communicates your product's vision and development process</p>

        <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src="green-plus-left.png" alt="sorry" />
 </div>


 <div className='md:flex flex-wrap justify-center  gap-[50px] items-center'>
    {
       process.map((items,index)=>{return(
    <div key={index} className='md:border-2 md:border-green-700 flex flex-col md:flex-row gap-[px]  items-center pt-[10px] '>
<img src={items.link} alt=""  className='h-[80px] w-[80px] md:h-[100px] md:w-[100px]'/>
<p className=' text-neutral-100 text-justify text-[20px] md:text-[20px] h-[350px] w-[300px] md:h-[200px] md:w-[500px] p-[20px]'>{items.text}</p>


        </div>



        )})}
        
    
</div>   
 
 <div className='flex items-center justify-center pt-[30px]'>
<Link to="/CREATE ROADMAPS">
<button className=' text-neutral-100 text-[25px] bg-indigo-500 md:text-[30px] lg:[30px] h-[50px] px-[20px] rounded-[20px] hover:bg-indigo-900 mt-[20px]'>CREATE ROADMAPS</button>
</Link>
</div>
</div>
    
    
    
    
    </>

  )
}

export default Process