<template>
  <div class="h-screen flex-col">
    <!-- <header class="flex justify-between items-center p-4 bg-blue-500 text-white "> -->
      <header class="fixed top-0 left-0 w-full flex justify-between items-center p-3 bg-blue-500 text-white shadow-md">
      <div >
        <!-- <button @click="showPosts" class="mx-2">Posts</button> | -->
        <button @click="goToPosts" class="mx-2">Posts</button> |
        <!-- <button @click="showTodos" class="mx-2">Todos</button> | -->
        <button @click="goToTodos" class="mx-2">Todos</button> |
        <!-- <button @click="showUsers" class="mx-2">Users</button> -->
        <button @click="goToUsers" class="mx-2">Users</button>
      </div>
      <div>
        <span class="mr-4">{{ username }}</span> |
        <button @click="logout" class="px-4 py-2 bg-red-500 rounded">Logout</button>
      </div>
    </header>

    <!-- <div class="flex-1 flex flex-col pt-16 min-h-0  max-w-full"> -->
    <div class="flex-1 overflow-auto p-4 mt-20 bg-gray-100">
      <!-- <div v-if="loading" class="text-center my-4">
        <span class="loader"></span> Loading...
      </div> -->
      <!-- <div v-if="currentTab === 'posts'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <PostItem v-for="post in posts" :key="post.id" :post="post" @edit-post="updatePost" @delete-post="deletePost"/>
      </div>
      <div v-if="currentTab === 'todos'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @update:todo="updateTodo" @delete:todo="deleteTodo"/>
      </div>
      <div v-if="currentTab === 'users'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <UserItem v-for="user in users" :key="user.id" :user="user" @update:user="updateUser" @delete:user="deleteUser"/>
      </div> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import axios from 'axios';
import { useRouter } from 'vue-router'
// import PostItem from './PostItem.vue';
// import TodoItem from './TodoItem.vue';
// import UserItem from './UserItem.vue';


const router = useRouter()

const username = ref('');
// const posts = ref([]);
// const todos = ref([]);
// const users = ref([]);
const currentTab = ref('');
// const loading = ref(false);

// const fetchPosts = async () => {
//   loading.value = true;
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     posts.value = response.data;
//   } catch (error) {
//     console.error(error);
//   } finally {
//     loading.value = false;
//   }
// };
    
const goToPosts = () => {
  router.push({ name: 'posts' }); 
};

// const fetchTodos = () => {
//   loading.value = true;
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => response.json())
//     .then(data => {
//       todos.value = data;
//     })
//     .catch(error => {
//       console.error(error);
//     })
//     .finally(() => {
//       loading.value = false;
//     });
// };

// const fetchUsers = async () => {
//   loading.value = true;
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     users.value = data;
//   } catch (error) {
//     console.error(error);
//   } finally {
//     loading.value = false;
//   }
// };   

// const showPosts = () => {
//   currentTab.value = 'posts';
//   fetchPosts();
// };

// const showTodos = () => {
//   currentTab.value = 'todos';
//   fetchTodos();
// };

const goToTodos = () => {
  router.push({ name: 'todos' }); 
};


// const showUsers = () => {
//   currentTab.value = 'users';
//   fetchUsers();
// };

const goToUsers = () => {
  router.push({ name: 'users' }); 
};

const logout = () => {
  // this.$router.push({ name: 'login' });
  localStorage.removeItem("loggedInUser"); // Remove user session
  router.push('/')
};

// const updatePost = (updatedPost) => {
//   const index = posts.value.findIndex(post => post.id === updatedPost.id);
//   if (index !== -1) {
//     posts.value[index] = updatedPost;
//   }
// };

// const updateTodo = (updatedTodo) => {
//   const index = todos.value.findIndex(todo => todo.id === updatedTodo.id);
//   if (index !== -1) {
//     todos.value[index] = updatedTodo;
//   }
// };

// const updateUser = (updatedUser) => {
//   const index = users.value.findIndex(user => user.id === updatedUser.id);
//   if (index !== -1) {
//     users.value[index] = updatedUser;
//   }
// };

// const deletePost = (deletedPost) => {
//   posts.value = posts.value.filter(post => post.id !== deletedPost);
// };

// const deleteTodo = (deletedTodo) => {
//   todos.value = todos.value.filter(todo => todo.id !== deletedTodo);
// };

// const deleteUser = (deletedUser) => {
//   users.value = users.value.filter(user => user.id !== deletedUser);
// };

onMounted(() => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    username.value = loggedInUser.username || loggedInUser.email;
  }
  // showPosts();
  currentTab.value = 'posts'
});

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
