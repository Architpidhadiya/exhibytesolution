<template>
    <div class="p-4 bg-white shadow-md rounded-lg w-full">
        <h3 class="text-xl font-semibold">Title: {{ post.title }}</h3>
        <p class="text-sm">Body: {{ post.body }}</p>
      <div class="mt-4 ">
          <button @click="openEditModal" class="px-4 py-2 bg-yellow-500 text-white rounded">Edit</button> |
          <button @click="deletePost" class="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
          <!-- :value="post.title" -->
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
  
  <script>
  import DialogData from './DialogData.vue';
  
  export default {
    components: {
      DialogData
    },
    props: {
      post: Object
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
      editPost(updatedPost) {
        // this.$emit('edit-post', { ...this.post, title: updatedTitle }); 
        this.$emit('edit-post',updatedPost); 
      },
      deletePost() {
        this.$emit('delete-post', this.post.id); 
      }
    }
  };
  </script>