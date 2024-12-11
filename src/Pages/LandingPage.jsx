import React from 'react'
import Navbar from '../Components/Navbar';
import './Landing.css'
import Hero from '../Components/Hero';
import Process from '../Components/Process';
import Template from '../Components/Template';


const LandingPage = () => {
  return (
    <div className='main'>
<Navbar/>
<Hero/>
<Process/>
<Template/>



    </div>
  )
}

export default LandingPage