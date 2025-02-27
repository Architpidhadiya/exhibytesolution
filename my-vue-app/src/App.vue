<template>
  <!-- <div>
    <p>Message from Child: {{ message }}</p>
    <ClickEvent @some-event="updateMessage" /> |


    <OnceEvent @once-event.once="showOnceAlert" />

    <p>Count: {{ count }}</p>
    <IncreaseBy @increase-by="incrementCount"  />
  </div> -->

  <!-- <div>
      <p>Welcome</p>
      <Lifecycle v-if="showComponent" />
      <button @click="toggleComponent">Toggle Component</button>

      <h1>Global Component</h1>
    <GlobalButton />
    </div> -->

    <!-- <h1> {{ bookTitle }} </h1> 
    <MyComponent v-model:title="bookTitle" /> -->

    <h1> {{ first }} {{ last }} </h1>
    <MyComponent
      v-model:first-name="first"
      v-model:last-name="last"  />
</template>

<script setup>
/**import ClickEvent from "./components/ClickEvent.vue";
import OnceEvent from "./components/OnceEvent.vue";
import IncreaseBy from "./components/IncreaseBy.vue";

export default {
  name: "App",
  components: { ClickEvent, OnceEvent, IncreaseBy },
  data() {
    return {
      message: "Waiting for event...",
      count: 0
    }
  },
  methods: {
    updateMessage(data) {
      this.message = data
    },
    showOnceAlert() {
      alert("This will run only once")
    },
    incrementCount(value) {
      this.count += value
    }
  }
}*/

/**import { ref } from "vue"
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
  }*/

  import { ref } from 'vue'
  import MyComponent from "./components/MyComponent.vue"

  //const bookTitle = ref('')
  const first = ref('archit')
  const last = ref('patel')
</script>

<style scoped>
  /*button {
      padding: 10px;
      margin-top: 10px;
      background-color: black;
      color: white;
      border: none;
      cursor: pointer;
  }*/
</style> 