import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='shadow rounded-lg border-2'>
        <img className='w-full h-56 object-cover rounded-t' src='https://picsum.photos/200'/>
        <div className='mt-4 p-3 '>
          <div className='flex justify-between font-semibold text-xl'>
            <h3 className=''>{product.name}</h3>
            <p className='text-gray-500'>{product.price} TL</p>
          </div>
          <button className='mt-5 mb-3 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full transition-all'>Sepete Ekle</button>
        </div>
    </div>
  )
}

export default ProductItem