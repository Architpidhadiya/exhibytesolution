//import { name, message, Reply } from "./second.js";
//import hello, * as m from "./second.js"

/*console.log(m.name)
m.message()
hello()
let r = new m.Reply()*/

//import {add} from "./second.js"

const loadModule = async () => {
    try {
        const module = await import('./second.js')
        console.log(module.add(2, 3))
    } catch (error) {
        console.error("Error", error)
    }
};
loadModule()