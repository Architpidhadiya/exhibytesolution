import React, { useState, useEffect } from "react"

/*const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        let timer
        if (running) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 1000);
        } else {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [running])

    return (
        <div>
            <h2>Time: {time} seconds</h2>
            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => { setTime(0); setRunning(false)}}>Reset</button>
        </div>
    )
}*/

const Stopwatch = () => {
    const [darkMode, setDarkMode] = useState(false)

    return (
        <div style={{ background: darkMode ? "#333" : "#fff", color: darkMode ? "#fff" : "#000", padding: "20px" }}>
            <h2>{darkMode ? "Dark Mode": "Light Mode"}</h2>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        </div>
    )
}

export default Stopwatch