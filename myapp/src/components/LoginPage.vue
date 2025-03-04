<template>
  <div class=" bg-gray-100">
    <div class="flex items-center justify-center h-full ">
      <div class="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
        <form @submit.prevent="login">
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
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      login() {
        if (this.email === "archit@gmail.com" && this.password === "archit123") {
          this.$router.push({ name: "dashboard" });
        } else {
          alert("Invalid login credentials");
        }
      },
    },
  };
  </script>
  