'use client'
import { useState } from "react"

export const CartCounter = () => {
    
    const [counter, setCounter] = useState(20)
    
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex">
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 hover:bg-gray-600 transition-all w-[100px] mr-2" onClick={() => setCounter(counter+1)}>+1</button>
                <button className="flex items-center justify-center p-2 rounded-xl bg-gray-900 hover:bg-gray-600 transition-all w-[100px]" onClick={() => setCounter(counter-1)}>-1</button>
            </div>
        </>
    )
}