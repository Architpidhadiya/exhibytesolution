<template>
    <div>
      <p>Welcome</p>
      <Lifecycle v-if="showComponent" />
      <button @click="toggleComponent">Toggle Component</button>

      <h1>Global Component</h1>
    <GlobalButton />
    </div>
  </template>
  
  <script>
  import { ref } from "vue"
  import Lifecycle from "./components/Lifecycle.vue"
  
  export default {
    components: { Lifecycle },
    setup() {
      const showComponent = ref(true);
  
      const toggleComponent = () => {
        showComponent.value = !showComponent.value
      }
  
      return { showComponent, toggleComponent }
    }
  }
  </script>
  
  <style scoped>
  button {
      padding: 10px;
      margin-top: 10px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
  }
    </style>  