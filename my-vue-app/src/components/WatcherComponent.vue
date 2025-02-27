<template>
    <div>
        <h3>Simple Watcher</h3>
        <p>Count: {{ count }}</p>
        <button @click="count++">Increase Count</button>

        <h3>Async Watcher</h3>
        <input v-model="searchText" placeholder="Search..." />
        <ul>
            <li v-for="result in searchResults" :key="result">{{ result }}</li>
        </ul>

        <h3>Deep Watcher</h3>
        <input v-model="user.name" placeholder="Enter Name" />
        <input v-model="user.age" type="number" placeholder="Enter Age" />
        <p>User: {{ user }}</p>
    </div>
</template>

<script>
import { useWatchExample } from "../watcher.js"

export default {
    name: "WatcherComponent",
        setup() {
            return useWatchExample()
    }
}
</script>

<style scoped>
input {
    display: block;
    margin: 5px 0;
    padding: 8px;
    width: 200px;
}
button{
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
}
</style>