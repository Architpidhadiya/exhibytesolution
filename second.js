const name = "Archit"

export default function hello() {
    console.log("Hi")
}

function message() {
    console.log(`Hello, How are you?`)
}

class Reply {
    constructor(name) {
        console.log(`I am fine thank you`)
    }
}

export {name, message, Reply}