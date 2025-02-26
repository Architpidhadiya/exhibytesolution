import { createApp } from "vue";
import App from "./App.vue"
// import CompOne from "./components/CompOne.vue"
// import CompTwo from "./components/CompTwo.vue"
// import  WatcherComponent  from "./components/WatcherComponent.vue";
// import Lifecycle from "./components/Lifecycle.vue"
//const { createApp, ref, h } = Vue

/*const App = {
    setup() {
        const message = ref("Welcome")
        const showText = ref(true)
        const items = ref(["BMW", "Thar", "Audi"])
        const url = ref("https://vue.js.org")
        const count = ref(0)
        const inputText = ref("")
        
        const incrementCount = () => count.value++
        const toggleText = () => (showText.value = !showText.value)

        return () =>
            h("div", {}, [
                h("h1", message.value),     //template syntax

                h("p", {}, showText.value ?  "This text is displayed" : ""),    //v-if (conditional rendering)

                h("ul", {},items.value.map((item) => h("li", {},item))),    //v-for (Looping through an array)

                h("p", {}, [h("a", { href: url.value, target:"_blank"}, "Visit vue.js")]),      //v-bind (attribute binding)

                h("p", {}, [ h("button", { onClick: incrementCount }, `Clicked ${count.value} times`)]),    //v-on (event handling)

                h("p", {}, [h("input", {    //v-model (two-way data binding)
                    value: inputText.value,
                    onInput: (e) => (inputText.value = e.target.value),
                }), ]),
                h("p",{}, `You typed: ${inputText.value}`),

                h("p", { style: { display: showText.value ? "block" : "none"} }, "This text is toggled"),       //v-show (toggle visibility)

                h("p",{}, [h("button", { onClick: toggleText }, "Toggle text visibled"), ])     //button to toggle visibility
            ])
    }
}*/

const app = createApp(App)
// const app = createApp(WatcherComponent)
// const app = createApp(Lifecycle)
// app.component('comp-one', CompOne)
// app.component('comp-two', CompTwo)
app.mount("#app")