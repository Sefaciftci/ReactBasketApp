import React from 'react'
import Header from './Header'
const Cart = () => {
  return (
    <div>
      <Header/>
      <div className='container mx-auto mt-10 w-[500px] ml-auto shadow-lg border-2 py-2 px-4' >   
        <h2 className='mb-3 font-semibold text-2xl'>Cart</h2>
        <hr/>
        <div className='mt-2'>
            <h4 className='text-gray-500'>Total:</h4>
            <button className='mb-2 w-full bg-red-500 hover:bg-red-600 text-white rounded-md mt-2 py-1 transition-all'>Sepeti Temizle</button>
        </div>
    </div>
    </div>
    
  )
}

export default Cart
