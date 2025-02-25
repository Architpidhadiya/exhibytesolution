<script setup>
import { defineEmits } from "vue"

const emit = defineEmits(["custom-event"])

const sendMessage = () => {
    emit("custom-event", "Hello, How are you")
}
</script>

<template>
    <button @click="sendMessage">Click to Emit Event</button>
</template>