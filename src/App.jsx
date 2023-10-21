import Home from './Components/pages/Home'
import Basket from './Components/pages/Basket'
import { Route, Routes } from "react-router-dom"

function App() {

  return (
        <>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='basket' element={<Basket/>}/>
          </Routes>
        </>
  )
}

export default App
