import React from 'react'
import {CgGym,CgCode} from 'react-icons/cg'
import {GoBook} from 'react-icons/go'
import {FaGamepad} from 'react-icons/fa'
import {MdOutlineFoodBank} from 'react-icons/md'
const Hobbie = () => {
  return (
   
    <div className='hobbie text-white flex justify-center items-center flex-col'>
      <div className="my-1 md:my-5">
        <span className='italic font-bold text-xl'> ~ Hobbies ~</span>
      </div>
       <ul className='flex flex-col md:flex-row text-xs md:text-lg md:gap-10 gap-1'>
        <li>
          <div className='flex gap-1 items-center font-bold'>
            <CgGym className="text-3xl"/>
            Gym
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center font-bold'>
            <CgCode className="text-3xl"/>
            Coding
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center font-bold'>
            <GoBook className="text-3xl"/>
            Reading
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center font-bold'>
          <FaGamepad className="text-3xl"/>
            Gaming
          </div>
        </li>
        <li>
          <div className='flex gap-1 items-center font-bold'>
          <MdOutlineFoodBank className='text-3xl'/>
            Eating
          </div>
        </li>
       </ul>

    </div>

   
  )
}

export default Hobbie
