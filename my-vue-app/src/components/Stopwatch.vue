<template>
    <div>
        <h2>Stopwatch</h2>
        <p>{{ time }} seconds</p>
        <button @click="start">Start</button> ||
        <button @click="stop">Stop</button> ||
        <button @click="reset">Reset</button>
    </div>
</template>

<script>
import { ref } from "vue"

export default {
   name: "AppStopwatch",
    setup() {
        const time = ref(0)
        let interval = null

        const start = () => {
            if (!interval) {
                interval = setInterval(() => time.value++, 1000)
            }
        }

        const stop = () => {
            clearInterval(interval)
            interval = null
        }

        const reset = () => {
            stop()
            time.value = 0
        }
        return { time, start, stop, reset}
    }
}
</script>