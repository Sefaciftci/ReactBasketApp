import React from 'react'
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between py-7 px-9 text-2xl mb-16 text-white bg-black '>
      <div className='font-semibold'>
        <h4 className='tracking-wide'>React-Tailwind Shop Application</h4>
      </div> 
      <div>
        <button onClick={()=> navigate('/basket')}><BsCartFill/></button>
      </div>
        
    </div>
  )
}

export default Header
