<!-- <template>
 <div v-if="dialog" class="dialog">
      <div class="dialog-content">
        <p> Enter Your Message: </p>
        <input v-model="inputMessage" />
        <button @click="handleSendMsssage">Send</button> 
        <button @click="dialog = false">Close</button>
      </div>
    </div>
</template>

<script setup>
import {computed, defineProps, defineEmits, ref} from 'vue'

// 'onDataChange'
const emit =defineEmits(['update:modelValue', 'onMessageSend'])
const props = defineProps({
  modelValue: {type: Boolean, default: false},
  data: {type: Boolean, default: false}
})

const inputMessage = ref('')
const dialog = computed({
  get() {
    return props.modelValue
    // return props.data
  }, set(newVal) {
    emit('update:modelValue', newVal)
    // emit('onDataChange', newVal)
  }
})

const handleSendMsssage = () => {
  emit('onMessageSend', inputMessage.value)
}
</script> -->



<!-- <template>
    <div>
      <h2>Child Component</h2>
      <button @click="toggleState">Toggle in Child</button>
    </div>

    <div class="dialog">
      <div class="dialog-content">
        <p> Enter Your Message: </p>
        <input v-model="inputMessage" />
        <button @click="sendMessage">Send</button> 
        <button @click="$emit('close')">Close</button>
      </div>
    </div>
  </template> -->
  
  <!-- <script>
  /*export default {
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
  };*/

  export default {
    data() {
      return {
        inputMessage: ""
      }
    },

    methods: {
      sendMessage() {
        this.$emit("message", this.inputMessage)
      }
    }
  }
  </script> -->

<template>
  <div v-if="isOpen" class="dialog">
      <div class="dialog-content">
        <h2>Enter Your Message</h2>
        <input v-model="inputMessage" type="text" placeholder="Type a message" /> <br />
        <button @click="submitMessage">Submit</button>
        <button @click="closeDialog">Close</button>
      </div>
  </div>
</template>

<script setup>
  import { ref, watch, defineProps, defineEmits } from "vue";

  const props = defineProps({
    isOpen: Boolean,
    message: String
  })
  const emit = defineEmits(["update:isOpen", "update:message"])

  const inputMessage = ref("")

  watch( 
    () => props.isOpen,
    (newValue) => {
      if (newValue) {
        inputMessage.value = ""
      }
    }
  )

  const submitMessage = () => {
      emit("update:message", inputMessage.value)
      closeDialog()
  }

  const closeDialog = () => {
    emit("update:isOpen", false)
  }
</script>
<style scoped>
  .dialog {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialog-content {
    background-color: aliceblue;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
  }

  button {
    margin: 5px;
    padding: 5px 10px;
    
  }
</style>