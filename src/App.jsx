import Header from "./Components/Header"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
function App() {
  return (
    <div>
      <Header/>
      <div className="container mx-auto px-8">
      <Products/>
      <Cart/>
    </div>
    </div>
    
  )
}

export default App
