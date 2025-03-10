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
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Users</h2>
      <div v-if="loading" class="text-center my-4">
        <span class="loader"></span> Loading...
      </div>
      <!-- <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <UserItem
          v-for="user in users"
          :key="user.id"
          :user="user"
          @update:user="updateUser"
          @delete:user="deleteUser"
        />
      </div> -->

      <div v-for="user in paginatedUsers" :key="user.id">
        <UserItem :user="user" @update:user="updateUser" @delete:user="deleteUser" />
      </div>

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
  import UserItem from '../components/UserItem.vue';

  import { useRouter } from 'vue-router'
  const router = useRouter()
  
  const users = ref([]);
  const loading = ref(false);
  const username = ref('');

  const currentPage = ref(1);
  const itemsPerPage = 10;

  const fetchUsers = async () => {
  loading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}; 
  
  onMounted(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
        username.value = loggedInUser.username || loggedInUser.email;
    }
    fetchUsers();
  });
  
  const updateUser = (updatedUser) => {
  const index = users.value.findIndex(user => user.id === updatedUser.id);
  if (index !== -1) {
    users.value[index] = updatedUser;
  }
};
  
const deleteUser = (deletedUser) => {
  users.value = users.value.filter(user => user.id !== deletedUser);
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

const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return users.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(users.value.length / itemsPerPage));

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
  