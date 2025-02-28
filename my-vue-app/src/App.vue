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

    <!-- <h1> {{ first }} {{ last }} </h1>
    <MyComponent
      v-model:first-name="first"
      v-model:last-name="last"  /> -->


    <!-- <div>
      <button @click="toggleVisibility">Toggle Visibility</button>

      <p v-if="isChildVisible">Child Message: {{ childMessage }}</p>
      <ChildComponents v-if="isChildVisible" @messageFromChild="updateChildMessage" />
  </div> -->

  <div>
    <ParentComp />
  </div>
</template>

<script>
import ParentComp from './components/ParentComp.vue';

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

  /** import { ref } from 'vue'
  import MyComponent from "./components/MyComponent.vue"

  //const bookTitle = ref('')
  const first = ref('archit')
  const last = ref('patel') */

  /*import { ref, watch } from 'vue';
  import ChildComponents from './components/ChildComponents.vue';

export default {
  name: 'App',
  components: {
    ChildComponents
  },
  setup() {
    const isChildVisible = ref(true);
    const childMessage = ref('');

    const toggleVisibility = () => {
      isChildVisible.value = !isChildVisible.value;
    };

    const updateChildMessage = (message) => {
      childMessage.value = message;
    };

    watch(childMessage, (newMessage, oldMessage) => {
      console.log('Message changed from:', oldMessage, 'to:', newMessage);
    });

    return { isChildVisible, childMessage, toggleVisibility, updateChildMessage };
  }
};*/


  export default {
    components: {
      ParentComp
    }
  }
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