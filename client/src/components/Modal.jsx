import React from 'react'
import { CircleX } from 'lucide-react'

const modal = ({ isOpen, onClose, children }) => {

  if(!isOpen){
    return null
  }

  return (
    <div className='bg-gray-100/70 top-0 left-0 fixed w-full min-h-screen flex justify-center items-center'>
        <div className='bg-white w-[400px] px-15 py-5 rounded-xl relative shadow-lg'>
          <CircleX color="#194567" className='absolute top-2 right-2' onClick={onClose}/>
            {children}
        </div>
    </div>
  )
}

export default modal