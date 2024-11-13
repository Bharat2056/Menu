import React from 'react'
import './ThHome.css'
import { useNavigate } from 'react-router-dom'

const ThHome = () => {
  const navigate=useNavigate();

  const handleClick=()=>{
    navigate('/signin')
  }
  return (
<>
<div className='container-third'>
<div>
    <img src="/logo.png" alt="Kupa logo" className='logo1' />
</div>

<div className='image-section'>
<img src="/food.png" alt="food" className='food-image1'/>
</div>

<div className='text-section1'>
  <h2>Get delivery at your doorstep</h2>
  <p>Your ready order will be delivered quickly by our courier</p>
</div>
<div className='pagination'>
<span className='active-dot'></span>
</div>

<div className='button-section'>
    <button onClick={handleClick} className='get-start'>Get Started</button>
    <button onClick={handleClick} className='sign-in1'>Sign in</button>
</div>
</div>
</>  )
}

export default ThHome