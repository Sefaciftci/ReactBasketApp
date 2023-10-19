import React from 'react'
import productData from '../productData'
import ProductItem from './ProductItem'

const Products = () => {
  console.log(productData);
  return (  
    <div className='grid grid-cols-3 gap-10'>
    {productData.map((product)=>{
      return <ProductItem key={product.id} product={product}/>
    })}
    </div>
  )
}

export default Products
