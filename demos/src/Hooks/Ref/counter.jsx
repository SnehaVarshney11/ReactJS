import React, { useRef } from "react";

function CounterRef() {
    const countRef = useRef(0);

    const incrementCount = () => {
        countRef.current += 1;
        console.log('Current count:', countRef.current)
    }

    return (
        <>
            <h1>Count : {countRef.current}</h1>
            <button onClick={incrementCount}>Click Me (Ref)</button>
        </>

    )
}

export default CounterRef;