<template>
  <div class="p-4 bg-white shadow-md rounded-lg mb-4">
    <h3 class="text-xl font-semibold">Title {{ todo.title }}</h3>
    <p class="text-sm">Completed: {{ todo.completed ? 'Completed' : 'Not completed' }}</p>
    <div class="mt-4">
      <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button>
      <button @click="deleteTodo" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
    </div>

    <DialogData 
      :is-visible="isModalVisible" 
      :value="todo.title" 
      @update:visible="isModalVisible = $event" 
      @edit="editTodo"
    />  
  </div>
</template>

<script>
import DialogData from './DialogData.vue';

export default {
  components: {
    DialogData
  },
  props: {
    todo: Object
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    openEditModal() {
      this.isModalVisible = true;
    },
    editTodo(updatedTitle) {
      this.$emit('update:user', { ...this.user, name: updatedTitle });
    },
    deleteTodo() {
      alert(`Delete todo with id: ${this.todo.id}`);
    }
  }
};
</script>
