import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/luckys.png'
import './index.css'


const index = () => {

  

  return (
    <>
    <div className="body-container">
      <img src={Logo} className='logo' alt="" />

     <div className="for-btn">
     
      <Link to='login' className='links' > 
      <button className='btn'>LOGIN</button>
      </Link>
     </div>
        
    </div>
    </>
  )
}

export default index
