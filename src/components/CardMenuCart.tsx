'use client'
import useCounter from "@/hooks/useCounter";
import Counter from "./Counter";
import { useEffect } from "react";
import useCart from "@/hooks/useCart";
import Trash from "./icons/Trash";

function CarMenuCart({ menu }) {
    const { car, addToCart } = useCart()
    const { counter, increaseCounter, decreaseCounter, setNumberToCounter } = useCounter()
    useEffect(() => {
        setNumberToCounter(menu.quantity)
    }, [])
    useEffect(() => {
        addToCart(menu, counter)
    }, [counter])

    return (
        <div className=" bg-gray-700 rounded-lg p-3 flex mb-4 text-white">
            <div className="flex grow">
                <figure className="h-16">
                    <img className="h-full" src="icono_menu.png" alt="" />
                </figure>
                <div className=""> 
                    <h3>{menu.name}</h3>
                    <small>s/{menu.price}</small>
                </div>
            </div>
            <div  className="flex flex-col items-center gap-2">
                <Counter counter={counter} increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} size="small" />
                <Trash menu ={menu}/>
            </div>

        </div>
    );
}

export default CarMenuCart;