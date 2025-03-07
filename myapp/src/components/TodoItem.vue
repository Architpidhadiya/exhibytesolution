<template>
  <div class="p-4 bg-white shadow-md rounded-lg mb-4">
    <h3 class="text-xl font-semibold">Title {{ todo.title }}</h3>
    <p class="text-sm">Completed: {{ todo.completed ? 'Completed' : 'Not completed' }}</p>
    <div class="mt-4">
      <!-- <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
      <button @click="deleteTodo" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button> -->
      <!-- :value="todo.title"  -->

      <button @click="isModalVisible = true" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
      <button @click="emit('delete:todo', todo.id)" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
    </div>

    <DialogData 
      :is-visible="isModalVisible" 
      :item="todo"
      :itemType="'todo'"
      @update:visible="isModalVisible = $event" 
      @edit="editTodo"
    />  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import DialogData from './DialogData.vue';

const props = defineProps({
  todo: Object
});

const emit = defineEmits(['update:todo', 'delete:todo']);

const isModalVisible = ref(false);

const editTodo = (updatedTodo) => {
  emit('update:todo', updatedTodo);
};
</script>
