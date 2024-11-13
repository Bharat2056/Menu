import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'
const Homepage = () => {
    const navigate= useNavigate();

    const handleClick=()=>{
        navigate('/sechome');
    }
  return (
   <>
   <div className='container'>
    <img src="logo.png"  alt="middleman"/>
    <button onClick={handleClick}>Click me</button>

   </div>
   </>
  )
}

export default Homepage