<template>
 
    <!-- <div class="flex items-center justify-center h-full "> -->
      <div class="h-screen flex items-center justify-center bg-gray-100">
      <div class="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold text-center mb-4">{{ isRegistering ? 'Register' : 'Login' }}</h2>


        <form v-if="!isRegistering" @submit.prevent="login">
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div> <br /> 
          <button
            type="submit"
            class="w-full p-2 bg-blue-500 text-white rounded"
          >
            Login
          </button> 

          <p class="mt-4 text-center text-sm">
            Don't have an account? 
            <a @click.prevent="toggleForm" class="text-blue-500 cursor-pointer">Register</a>
          </p>
        </form>

        
        <form v-if="isRegistering" @submit.prevent="register">
          <div class="mb-4">
            <label for="regEmail" class="block text-sm font-semibold">Email</label>
            <input
              type="email"
              id="regEmail"
              v-model="email"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label for="regPassword" class="block text-sm font-semibold">Password</label>
            <input
              type="password"
              id="regPassword"
              v-model="password"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-semibold">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div> <br />
          <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded">
            Register
          </button>

          <p class="mt-4 text-center text-sm">
            Already have an account? 
            <a @click.prevent="toggleForm" class="text-blue-500 cursor-pointer">Login</a>
          </p>
        </form>

      </div>
    </div>               
  
</template>
  
<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isRegistering = ref(false);

const router = useRouter();

const toggleForm = () => {
  isRegistering.value = !isRegistering.value;
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
};

const login = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email.value);

  if (user) {
    if (user.password === password.value) {
      localStorage.setItem('loggedInUser', JSON.stringify({ email: user.email, username: user.email.split('@')[0] }));
      router.push({ name: 'dashboard' });
    } else {
        alert('Incorrect password.');
      }
  } else {
      alert('No user found with this email.');
    }
  };
 
const register = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const userExists = users.find(user => user.email === email.value);

  if (userExists) {
    alert('User already exists. Please login.');
    return;
  }

  const newUser = {
    email: email.value,
    password: password.value,
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));

  localStorage.setItem('loggedInUser', JSON.stringify({ email: newUser.email, username: newUser.email.split('@')[0] }));
  alert('Registration successful and logged in.');
  router.push({ name: 'dashboard' });
};
  </script>
  