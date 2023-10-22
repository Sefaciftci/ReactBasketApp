import React, { useContext } from 'react'
import Header from './Header'
import MainContext from './Context'

const Cart = () => {
  const {basket,clearCart} = useContext(MainContext);
  const totalPrice = basket.reduce((acc , item)=> acc + item.price , 0) 
  return (
    <div>
      <Header/>
      {basket.length > 0 ? 
      <div className='container mx-auto mt-10 w-[500px] ml-auto shadow-lg border-2 py-2 px-4' >   
      <h2 className='mb-3 font-semibold text-2xl'>Cart</h2>
      <hr/>
      <ul className='py-5 '>
        {basket.map((item,i) => {
          return <li className='py-[6px] flex justify-between font-semibold text-gray-500' key={i}>
            <span>{item.name}</span>
            <span className='text-gray-600'>{item.price} TL</span>
          </li>
        })}
      </ul>
        <div className='mt-2'>
          <h4 className='text-gray-600 font-bold text-xl'>Total: {totalPrice} TL</h4> 
          <button onClick={clearCart} className='mb-2 w-full bg-red-500 hover:bg-red-600 text-white rounded-md mt-2 py-1 transition-all'>Sepeti Temizle</button>
        </div>
    </div> 
    : 
    <div className='flex justify-center'>
      <h1 className='text-3xl font-bold bg-yellow-500 py-5 px-8 shadow-lg	text-white rounded-md'>Sepetiniz Boş</h1>
    </div>
    }
    </div>
    
  )
}

export default Cart
