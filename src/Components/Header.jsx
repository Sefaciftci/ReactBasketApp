import React, { useContext } from 'react'
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import MainContext from './Context';
const Header = () => {
  const navigate = useNavigate();
  const {basket} = useContext(MainContext);
  return (
    <div className='flex items-center justify-between py-8 px-10 text-2xl mb-16 text-white bg-black '>
      <div className='font-bold'>
        <h3>React-Tailwind Shop App</h3>
      </div> 
      <div className='flex items-center'>
        <button className='mr-4 font-bold text-2xl' onClick={()=> navigate('/')}>Shop</button>
        <button onClick={()=> navigate('/basket')}><BsCartFill/></button>
        {basket.length > 0 && <span className='text-sm bg-red-500 rounded-full px-[5px] absolute top-6 right-7'>{basket.length}</span>}
      </div>
        
    </div>
  )
}

export default Header
