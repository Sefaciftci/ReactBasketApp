import React from 'react'
import Header from '../Header'
import Products from '../Products'

const Home = ({basket , setBasket}) => {
  return (
    <div>
        <Header/>
      <div className="container mx-auto px-9 pb-12">
        <Products/>   
      </div>
    </div>
  )
}

export default Home;
