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

/*const Greeting = () => {
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
}*/

const Greeting = () => {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email.includes("@") || password.length < 8) {
            setError("Invalid email and password must be at least 8 characters")
        } else {
            setError("")
            alert("Login Successful")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    )
}
export default Greeting