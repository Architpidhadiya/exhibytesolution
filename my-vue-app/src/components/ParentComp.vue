<template>

<button @click="handleClick">Click here</button>
<ChildComp v-model="dialog" @onMessageSend="handleMessage"/>
<!-- :data="dialog" @onDataChange="handleDataChange"  -->

<div>message: {{ message }} </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComp from './ChildComp.vue';

const dialog = ref(false)
const message = ref(null)

const handleClick = () => {
  console.log('clicked');
  dialog.value = true
}

const handleMessage = (msg) => {
  message.value = msg
  dialog.value = false
}
// const handleDataChange = (data) => {
//   dialog.value = data
// }
</script>

<!-- <template>
    <div>
      <h2>Parent Component</h2>
      <p>Toggle State: {{  isActive }}</p>
      <ChildComp :toggle="isActive" @update-toggle="updateToggle" />
    </div>

    <div>
      <button @click="openDialog">Open Dialogbox</button>
      <ChildComp v-if="showDialog" @close="closeDialog" @message="handleMessage"  />

      <p v-if="message">Received Message: {{ message }}</p>
    </div>
  </template> -->
  
  <!-- <script>
import ChildComp from './ChildComp.vue';
  
  export default {
    components: {
      ChildComp
    },
    /*data() {
      return {
        isActive: false
      };
    },
    methods: {
      updateToggle(newValue) {
        this.isActive = newValue;
      }
    }*/

    data() {
      return {
        showDialog: false,
        message: ""
      }
    },

    methods: {
      openDialog() {
        this.showDialog = true
      },
      closeDialog() {
        this.showDialog = false
      },
      handleMessage(msg) {
        this.message = msg
        this.closeDialog()
      }
    }
  };


  </script> -->
  