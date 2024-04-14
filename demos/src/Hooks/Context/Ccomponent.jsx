import React, { useContext } from "react";
import MyContext from "./context";

const ChildComponent = () => {
    const contextVal = useContext(MyContext);

    return <div>{contextVal}</div>;
}

export default ChildComponent;