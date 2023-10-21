import { createContext } from "react";
import { useState } from "react";

const MainContext = createContext();


function Provider({children}){
    const [basket , setBasket] = useState([]);
    const data = {
        basket,
        setBasket
    }
    return <MainContext.Provider value={data}>
        {children}
    </MainContext.Provider>
}
export {Provider};
export default MainContext;