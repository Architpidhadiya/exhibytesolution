<script setup>
    //const title = defineModel('title')
    import { ref } from 'vue';

//const title = ref('title');

const firstName = ref('firstName')
const lastName = ref('lastName')
</script>

<template>
    <!-- <input type="text" v-model="title" /> -->
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
</template>