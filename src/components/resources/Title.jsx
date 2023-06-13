import React from 'react'

const Title = ({title,setTitle}) => {
  return (
    <div className='mb-5'>
        <span className=" text-2xl font-bold underline ">{ title }</span>
        <span className=" text-xs bg-slate-300 p-1 ml-2 ">{ setTitle }</span>
      
    </div>
  )
}

export default Title
