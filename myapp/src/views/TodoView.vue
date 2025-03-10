<template>
    <div class="p-4">
        <header class="fixed top-0 left-0 w-full flex justify-between items-center p-3 bg-blue-500 text-white shadow-md">
        <div >
            <button @click="goToPosts" class="mx-2">Posts</button> |
            <button @click="goToTodos" class="mx-2">Todos</button> |
            <button @click="goToUsers" class="mx-2">Users</button>
        </div>

        <div>
            <span class="mr-4">{{ username }}</span> |
            <button @click="logout" class="px-4 py-2 bg-red-500 rounded">Logout</button>
        </div>
        </header>

      <h2 class="text-2xl font-bold text-gray-800 mb-4">Todos</h2>
      <div v-if="loading" class="text-center my-4">
        <span class="loader"></span> Loading...
      </div>
      <!-- <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          @update:todo="updateTodo"
          @delete:todo="deleteTodo"
        />
      </div> -->

      <div v-for="todo in paginatedTodos" :key="todo.id">
      <TodoItem :todo="todo" @update:todo="updateTodo" @delete:todo="deleteTodo" />
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-center mt-4 space-x-2">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1" 
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span class="px-4 py-2">{{ currentPage }} / {{ totalPages }}</span>

      <button 
        @click="nextPage" 
        :disabled="currentPage >= totalPages" 
        class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import TodoItem from '../components/TodoItem.vue';
  
   import { useRouter } from 'vue-router'
   const router = useRouter()

  const todos = ref([]);
  const loading = ref(false);
  const username = ref('');

  const currentPage = ref(1);
  const itemsPerPage = 10;

  const fetchTodos = () => {
  loading.value = true;
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
      todos.value = data;
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
};
  
  onMounted(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        username.value = loggedInUser.username || loggedInUser.email;
    }
    fetchTodos();
  });
  
  const updateTodo = (updatedTodo) => {
  const index = todos.value.findIndex(todo => todo.id === updatedTodo.id);
  if (index !== -1) {
    todos.value[index] = updatedTodo;
  }
};
  
const deleteTodo = (deletedTodo) => {
  todos.value = todos.value.filter(todo => todo.id !== deletedTodo);
};

const goToPosts = () => {
  router.push({ name: 'posts' }); 
};

const goToTodos = () => {
  router.push({ name: 'todos' }); 
};

const goToUsers = () => {
  router.push({ name: 'users' }); 
};

const logout = () => {

  localStorage.removeItem("loggedInUser");
  router.push('/')
}


const paginatedTodos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return todos.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(todos.value.length / itemsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
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
  