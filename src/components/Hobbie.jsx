import React from 'react'
import {CgGym,CgCode} from 'react-icons/cg'
import {GoBook} from 'react-icons/go'
import {FaGamepad} from 'react-icons/fa'
import {MdOutlineFastfood} from 'react-icons/md'
const Hobbie = () => {
  return (
   
    <div className='hobbie text-white flex justify-center items-center flex-col'>
      <div className="my-1 md:my-5">
        <span className='italic font-bold text-xl'> ~ Hobbies ~</span>
      </div>
       <ul className='flex flex-col md:flex-row text-xs md:text-lg md:gap-10 gap-1'>
        <li>
          <div className='flex gap-1 items-center '>
            <CgGym className="text-2xl"/>
            Gym
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center '>
            <CgCode className="text-2xl"/>
            Coding
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center '>
            <GoBook className="text-2xl"/>
            Reading
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center'>
          <FaGamepad className="text-2xl"/>
            Gaming
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center '>
          <MdOutlineFastfood className='text-2xl'/>
            Eating
          </div>
        </li>
       </ul>

    </div>

   
  )
}

export default Hobbie
