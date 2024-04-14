import React, { useState } from "react";

function FavColor() {
    const [color, setColor] = useState("red");
    
    return (
        <>
            <h1>My Fav Color is : {color}</h1>
            <button type="button" onClick={() => setColor("blue")}>Blue</button>
            <button type="button" onClick={() => setColor("pink")}>Pink</button>
            <button type="button" onClick={() => setColor("red")}>Red</button>
            <button type="button" onClick={() => setColor("yellow")}>Yellow</button>
        </>
    )
}

export default FavColor;