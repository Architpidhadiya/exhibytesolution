<template>
  <div class="">
    <header class="flex justify-between items-center p-4 bg-blue-500 text-white ">
      <div >
        <button @click="showPosts" class="mx-2">Posts</button> |
        <button @click="showTodos" class="mx-2">Todos</button> |
        <button @click="showUsers" class="mx-2">Users</button>
      </div>
      <div>
        <span class="mr-4">{{ username }}</span> |
        <button @click="logout" class="px-4 py-2 bg-red-500 rounded">Logout</button>
      </div>
    </header>
    <div class="flex-1 p-4 overflow-auto">
      <div v-if="loading" class="text-center my-4">
        <span class="loader"></span> Loading...
      </div>
      <div v-if="currentTab === 'posts'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <PostItem v-for="post in posts" :key="post.id" :post="post" @edit-post="updatePost" @delete-post="deletePost"/>
      </div>
      <div v-if="currentTab === 'todos'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @update:todo="updateTodo" @delete:todo="deleteTodo"/>
      </div>
      <div v-if="currentTab === 'users'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <UserItem v-for="user in users" :key="user.id" :user="user" @update:user="updateUser" @delete:user="deleteUser"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import PostItem from './PostItem.vue';
import TodoItem from './TodoItem.vue';
import UserItem from './UserItem.vue';

export default {
  components: { PostItem, TodoItem, UserItem },
  data() {
    return {
      username: "", 
      posts: [],
      todos: [],
      users: [],
      currentTab: '',
      loading: false
    };
  },
  
  methods: {
    async fetchPosts() {
      this.loading = true;
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    

    fetchTodos() {
      this.loading = true;
      new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error));
      })
      .then(data => {
        this.todos = data;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.loading = false; 
      });
    },
    

    async fetchUsers() {
      this.loading = true;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false
      }
    },

    showPosts() {
      this.currentTab = 'posts';
      this.fetchPosts();
    },
    showTodos() {
      this.currentTab = 'todos';
      this.fetchTodos();
    },
    showUsers() {
      this.currentTab = 'users';
      this.fetchUsers();
    },

    logout() {
      this.$router.push({ name: 'login' });
    },

    updatePost(updatedPost) {
      const index = this.posts.findIndex(post => post.id === updatedPost.id);
      if (index !== -1) {
        // this.$set(this.posts, index, updatedPost);  
        this.posts[index] = updatedPost
      }
    },

    updateTodo(updatedTodo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        // this.$set(this.todos, index, updatedTodo); 
        this.todos[index] = updatedTodo 
      }
    },

    updateUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        // this.$set(this.users, index, updatedUser); 
        this.users[index] = updatedUser 
      }
    },

    deletePost(deletedPost) {
      this.posts = this.posts.filter(post => post.id !== deletedPost);
    },

    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo.id !== deletedTodo);
    },

    deleteUser(deletedUser) {
      this.users = this.users.filter(user => user.id !== deletedUser);
    }
  },

  created() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      this.username = loggedInUser.username || loggedInUser.email; 
    }
    this.showPosts(); 
  },
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
