'use client'
import { useState, createContext } from "react";




export const CartContext = createContext({})

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product, quantity)=> {

        const productInCartIndex = cart.findIndex(item => item.id_menu === product.id_menu)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity = quantity
            return setCart(newCart)
        }

        setCart(prevState => ([...prevState, { ...product, quantity}]))
    }

    const removeToCart = product => {
        console.log({product,num:26})
        setCart(prev => prev.filter(item => item.id_menu !== product.menu.id_menu))
    }

    const clearCart = () => {
        setCart([])
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, removeToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;