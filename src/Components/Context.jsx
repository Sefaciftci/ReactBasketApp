import { createContext } from "react";
import { useState } from "react";

const MainContext = createContext();

function Provider({children}){
    const [basket , setBasket] = useState([]);
    const clearCart = () => {
        setBasket([]);
    }
    const data = {
        basket,
        setBasket,
        clearCart
    }

    return <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>
}
export {Provider};
export default MainContext;