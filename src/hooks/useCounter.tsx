import { useState } from "react";

function useCounter() {
    const [counter, setCounter] = useState(1)
    const increaseCounter = () => setCounter(counter + 1)
    const decreaseCounter = () => counter == 1 ? "" : setCounter(counter - 1)
    const setNumberToCounter = (number:number) => setCounter(number)
    return { counter, increaseCounter, decreaseCounter, setNumberToCounter }
}

export default useCounter;