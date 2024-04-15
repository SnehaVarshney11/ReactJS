import React, { memo, useState } from "react";

const ChildComponent = memo(( {name} ) => {
    console.log('Render Child Component');
    return <div>{name}</div>
})

function ParentMemo () {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Sneha");

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me Memo</button>
            <br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <br />
            <p>Count: {count}</p>
            <ChildComponent name={name} />
        </div>
    )
}

export default ParentMemo;