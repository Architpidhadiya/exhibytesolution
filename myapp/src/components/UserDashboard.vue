<template>
  <div class="flex flex-col h-screen">
    <header class="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div>
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
      <div v-if="currentTab === 'posts'">
        <PostItem v-for="post in posts" :key="post.id" :post="post" @edit-post="updatePost"/>
      </div>
      <div v-if="currentTab === 'todos'">
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @update:todo="updateTodo"/>
      </div>
      <div v-if="currentTab === 'users'">
        <UserItem v-for="user in users" :key="user.id" :user="user" @update:user="updateUser"/>
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
      username: "Archit Patel", 
      posts: [],
      todos: [],
      users: [],
      currentTab: '',
    };
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.posts = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    

    fetchTodos() {
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
      });
    },
    

    async fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.users = data;
      } catch (error) {
        console.error(error);
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
        this.$set(this.posts, index, updatedPost);  
      }
    },

    updateTodo(updatedTodo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        this.$set(this.todos, index, updatedTodo);  
      }
    },

    updateUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id);
      if (index !== -1) {
        this.$set(this.users, index, updatedUser);  
      }
    },
  },

  created() {
    this.showPosts(); 
  },
};
</script>
