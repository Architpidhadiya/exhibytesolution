const { createApp, ref, h } = Vue

const App = {
    setup() {
        const showText = ref(true)
        const items = ref(["BMW", "Thar", "Audi"])
        const url = ref("https://vue.js.org")
        const count = ref(0)
        const inputText = ref("")

        const toggleText = () => (showText.value = !showText.value)
        const incrementCount = () => count.value++

        return () =>
            h("div", [
                showText.value ? h("p", "This text is rendered") : null,

                h("ul", items.value.map((item) => h("li", item))),

                h("a", { href: url.value, target:"_blank"}, "Visit vue.js"),

                h("button", { onClick: incrementCount }, `Clicked ${count.value} times`),

                h("input", {
                    value: inputText.value,
                    onInput: (e) => (inputText.value = e.target.value)
                }),

                h("p", `You typed: ${inputText.value}`),

                h("p", { style: { display: showText.value ? "block" : "none"} }, "This text is toggled"),

                h("button", { onClick: toggleText }, "Toggle text visibled")
            ])
    }
}

createApp(App).mount("#app")