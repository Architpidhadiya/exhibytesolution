<template>
    <div>
      <h2>Child Component</h2>
      <button @click="toggleState">Toggle in Child</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      toggle: Boolean,
    },
    computed: {
      toggleComputed: {
        get() {
          return this.toggle
        },
        set(value) {
          this.$emit("update-toggle", value)
        }
      }
    },
    watch: {
      toggle(newValue) {
        console.log("Parent Toggle Change: ", newValue);
      }
    },
    methods: {
      toggleState() {
        this.toggleComputed = !this.toggleComputed;
      }
    }
  };
  </script>
  