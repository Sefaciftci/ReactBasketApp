import React, { useContext } from 'react'
import Cart from '../Cart'

const Basket = () => {
  return (
    <div>
        {basket.length > 0 ? <Cart/> : 
        <h3>Sepetiniz Boş</h3>}
    </div>
  )
}

export default Basket;
