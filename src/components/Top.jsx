import React from 'react'
import Topimage from '../assets/img/top.png'
import "../assets/css/button89.css"
const Top = () => {
  return (
    // <div className='h-screen'  style={{background:`url(${Topimage})`}} >
      <div className='h-screen flex justify-center items-center' id='top'>
        <div className='text-center' >
        <div className=" text-4xl font-bold text-white mb-3">Khaing Zar Ni Maw</div>
        <div className=" text-white mb-3">Welcome to my site</div>
        <button role='button' className='button-89'>Download CV</button>
        </div>
      </div>
  )
}

export default Top
