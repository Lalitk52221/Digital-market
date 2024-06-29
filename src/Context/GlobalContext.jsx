import react , { createContext, useState } from "react"


const GlobalContext = createContext()

const ContextProvider =({children})=>{

const [cart, setCart] = useState([])
const addToCart = (product)=>{
    setCart([...cart, product])
    localStorage.setItem("cart",JSON.stringify([...cart,product]))
} 
const removeTocart=(product)=>{
    const newCart = cart.filter((item)=>item.id !==product.id);
    setCart(newCart);
    localStorage.setItem("cart",JSON.stringify(newCart))
}

    return(
        <GlobalContext.Provider value={{
            cart,
            addToCart,
            removeTocart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalContext, ContextProvider}