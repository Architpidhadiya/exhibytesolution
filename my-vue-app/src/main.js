import { createApp, h, ref } from "vue";

const App = {
    setup() {
        const count = ref(0)
        return () =>
            h("div", [
                h("p", `Count: ${count.value}`),
                h("button", { onClick: () => count.value++ }, "Increment")
            ])
    }
}

createApp(App).mount("#app")