// Functional Component 
import React from 'react'

// function Greet() {
//     return <h1>Hello World!</h1>
// }

/*const Greet = props => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div> 
    )
}  */

//Destructuring the props
// 1 method
/* const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div> 
    )
} */

// 2 method
const Greet = props => {
    const{name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div> 
    )
} 

export default Greet