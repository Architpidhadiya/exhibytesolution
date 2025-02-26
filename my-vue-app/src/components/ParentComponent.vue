<script setup>
import { ref } from "vue"
import ChildComponent from "./ChildComponent.vue"

const message = ref("")

const handleEvent = (data) => {
    message.value = data
}
</script>

<template>
    <div>
        <ChildComponent @custom-event="handleEvent" />
        <p>Message from Child: {{ message }}</p>
    </div>
</template>