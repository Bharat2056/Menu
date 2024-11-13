import React from 'react';
import './SecHome.css'
import { useNavigate } from 'react-router-dom';
const SecHome = () => {
  const navigate=useNavigate()

  const handleClick=()=>{
    navigate('/thhome')
  }
  const handleClick1=()=>{
    navigate('/signin')
  }
  return (
    <>
    <div className="mobile-container">
      {/* Logo Section */}
      <div className="logo-section">
        <img src="/logo.png" alt="Kupa logo" className="logo" /> {/* Replace with your logo */}
      </div>

      {/* Main Image Section */}
      <div className="image-section">
        <img src="/food.png" alt="Food" className="food-image" /> {/* Replace with your main food image */}
        {/* Optionally, add any mini-images here */}
      </div>

      {/* Text Section */}
      <div className="text-section">
        <h2>All your favorites foods</h2>
        <p>Order your favorite menu with easy, on-demand delivery</p>
      </div>

      {/* Pagination Indicator */}
      <div className="pagination">
        <span className="active-dot"></span> {/* Active dot */}
      </div>

      {/* Buttons Section */}
      <div className="buttons-section">
        <button onClick={handleClick} className="continue-btn">Continue</button>
        <button onClick={handleClick1} className="signin-btn">Sign in</button>
      </div>
     </div>
    </>
  )
}

export default SecHome