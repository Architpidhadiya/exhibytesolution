import React, { useState } from "react"

// const greeting = ({ name }) => {
//     return <h1>Hello, {name}, Welcome to React.</h1>
// }

/*const Greeting = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)} > Increase </button>
            <button onClick={() => setCount(count - 1)} > Decrease </button>
        </div>
    )
}*/

const Greeting = () => {
    const [ name, setName ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`Hello, ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Greeting