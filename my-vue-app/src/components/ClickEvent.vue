<template>
    <button @click="sendMessage">Click Me Once</button>
</template>

<script>
export default {
    name: "ClickEvent",
    methods: {
        sendMessage() {
            this.$emit("some-event", "Hello from ClickEvent")
        }
    }
}
</script>