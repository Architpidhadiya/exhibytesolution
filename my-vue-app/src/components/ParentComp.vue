<template>
    <div>
      <h2>Parent Component</h2>
      <p>Toggle State: {{  isActive }}</p>
      <ChildComp :toggle="isActive" @update-toggle="updateToggle" />
    </div>
  </template>
  
  <script>
  import ChildComp from './ChildComp.vue';
  
  export default {
    components: {
      ChildComp
    },
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      updateToggle(newValue) {
        this.isActive = newValue;
      }
    }
  };
  </script>
  