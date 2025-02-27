<template>
  <div>
    <button @click="sendMessage">Send Message to Parent</button>
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'ChildComponents',
  setup(props, { emit }) {
    const message = ref('Hello from Child Component!');

    const sendMessage = () => {
      emit('messageFromChild', message.value);
    };

    return { message, sendMessage };
  }
});
</script>
