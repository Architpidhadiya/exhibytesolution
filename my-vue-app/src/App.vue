<template>
  <div>
    <p>Message from Child: {{ message }}</p>
    <ClickEvent @some-event="updateMessage" /> |


    <OnceEvent @once-event.once="showOnceAlert" />

    <p>Count: {{ count }}</p>
    <IncreaseBy @increase-by="incrementCount"  />
  </div>
</template>

<script>
import ClickEvent from "./components/ClickEvent.vue";
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
}
</script>