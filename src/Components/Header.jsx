import React from 'react'
import { BsCartFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className='flex items-center justify-between py-7 px-9 text-2xl mb-16 text-white bg-black '>
      <div className='font-semibold'>
        <h4 className='tracking-wide'>React-Tailwind Shop Application</h4>
      </div> 
      <div>
        <a><BsCartFill/></a>
      </div>
        
    </div>
  )
}

export default Header
