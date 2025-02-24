<template>
  <button @click="sendMessage">Send Message to Parent</button>
</template>

<script>
export default {
  emits: ["message"],
  setup(_, { emit }) {
    const sendMessage = () => {
      emit("message", "Hello from Child!");
    };
    return { sendMessage };
  }
};
</script>
