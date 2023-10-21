import React from 'react'
import Header from '../Header'
import Products from '../Products'

const Home = ({basket , setBasket}) => {
  return (
    <div>
        <Header/>
      <div className="container mx-auto px-8">
        <Products/>   
      </div>
    </div>
  )
}

export default Home;
