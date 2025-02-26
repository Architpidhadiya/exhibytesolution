<template>
    <div>
        <p>Message: {{ message }}</p>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue"

export default {
    name: "LifecycleExample",
    setup() {
        const message = ref("Hello, Archit");

        const changeMessage = () => {
            message.value = "Lifecycle hooks are awesome"
        };

        onBeforeMount(() => {
            console.log("onBeforeMount: Component is about to be mounted")
        });

        onMounted(() => {
            console.log("onMounted: Component is now mounted to DOM")
        });

        onBeforeUpdate(() => {
            console.log("onBeforeUpdate: Data is about to be change")
        });

        onUpdated(() => {
            console.log("onUpdated: Data has been updated")
        });
        
        onBeforeUnmount(() => {
            console.log("onBeforeUnmount: Component is about to be removed")
        });

        onUnmounted(() => {
            console.log("onUnmounted: Component has been removed")
        });
        return { message, changeMessage}
    }
}
</script>

<style scoped>
button {
    padding: 10px;
    margin-top: 10px;
    background-color: skyblue;
    color: white;
    border: none;
    cursor: pointer;
}
</style>