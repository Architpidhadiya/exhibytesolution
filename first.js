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

/*const x = Symbol('Hello, How are you')
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
console.log(symbols1 === symbols2)*/

function iterator(array) {
    let index = 0

    return {
        next : function () {
            if ( index < array.length) {
                return { value: array[index++], done: false }
            } else {
                return { value: undefined, done: true}
            }
        }
    };
}

const i = iterator([10, 7, 8])

console.log(i.next())
console.log(i.next())
console.log(i.next())
console.log(i.next())

function* generator() {
    yield 40
    yield 60
    yield 70
}

const generatorr = generator()
// console.log(generatorr.next().value)
// console.log(generatorr.next().value)
// console.log(generatorr.next().value)

for ( const value of generatorr) {
    console.log(value)
}