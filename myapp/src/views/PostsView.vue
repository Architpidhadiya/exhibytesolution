<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Posts</h2>
      <div v-if="loading" class="text-center my-4">
        <span class="loader"></span> Loading...
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          @edit-post="updatePost"
          @delete-post="deletePost"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import PostItem from '../components/PostItem.vue';
  
  const posts = ref([]);
  const loading = ref(false);
  
  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      posts.value = response.data;
    } catch (error) {
      console.error(error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchPosts();
  });
  
  const updatePost = (updatedPost) => {
    const index = posts.value.findIndex((post) => post.id === updatedPost.id);
    if (index !== -1) {
      posts.value[index] = updatedPost;
    }
  };
  
  const deletePost = (deletedPost) => {
    posts.value = posts.value.filter((post) => post.id !== deletedPost);
  };
  </script>
  
  <style scoped>
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border-left-color: #3498db;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  