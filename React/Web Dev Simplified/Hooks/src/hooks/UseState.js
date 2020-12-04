import React, { useEffect, useState } from 'react'

function UseState() {
    const [ count, setCount ] = useState(3)

    useEffect(() => {
        const cleanUp = () => console.log('paykhana');
        return () => {
            cleanUp()
        }
    }, [count])

    const decrementCount = () => {
        setCount(pre => pre - 1)
    }
    const incrementCount = () => {
        setCount(pre => pre + 1)
    }

    return (
        <div>
            <button onClick={decrementCount}>-</button>
            <span> {count} </span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseState
