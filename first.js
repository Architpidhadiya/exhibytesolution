//import { name, message, Reply } from "./second.js";
//import hello, * as m from "./second.js"

/*console.log(m.name)
m.message()
hello()
let r = new m.Reply()*/

//import {add} from "./second.js"

/*const loadModule = async () => {
    try {
        const module = await import('./second.js')
        console.log(module.add(2, 3))
    } catch (error) {
        console.error("Error", error)
    }
};
loadModule()*/

const x = Symbol('Hello, How are you')
console.log(x)
console.log(typeof x)

const str = Symbol('I am fine thank you')
console.log(str)
console.log(typeof str)

console.log(x.description)
console.log(str.description)

let obj = {
    name: "Archit Patel"
}
obj[x] = "Karan Ramotiya"
console.log(obj)
console.log(obj.name)
console.log(obj[x])

const s1 = "hello"
const s2 = "hello"
console.log(s1 === s2)

const symbols1 = Symbol("hello")
const symbols2 = Symbol("hello")
console.log(symbols1 === symbols2)