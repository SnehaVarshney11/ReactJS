import React, { useState } from 'react';

const Counter = () => {

    const[count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <>
            <h2>Count : {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </>
    ) 
}

export default Counter;