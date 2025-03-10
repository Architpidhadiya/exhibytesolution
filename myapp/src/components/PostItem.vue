<template>
    <div class="p-4 bg-white shadow-md rounded-lg w-full">
        <h3 class="text-xl font-semibold">Title: {{ post.title }}</h3>
        <p class="text-sm">Body: {{ post.body }}</p>
      <div class="mt-4 ">
          <!-- <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
          <button @click="deletePost" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button> -->
          <!-- :value="post.title" -->

          <button @click="isModalVisible = true" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
          <button @click="emit('delete-post', post.id)" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
        </div>
  
      
      <DialogData 
        :is-visible="isModalVisible" 
        :item="post"
        :itemType="'post'"
        @update:visible="isModalVisible = $event" 
        @edit="editPost"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import DialogData from './DialogData.vue';
  
  defineProps({
    post: Object
  });

const emit = defineEmits(['edit-post', 'delete-post']);

const isModalVisible = ref(false);

const editPost = (updatedPost) => {
  emit('edit-post', updatedPost);
};
  </script>