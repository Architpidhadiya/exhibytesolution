<template>
  <div class=" bg-gray-100">
    <div class="flex items-center justify-center h-full ">
      <div class="w-full max-w-sm p-8 bg-white shadow-lg rounded-lg">
        <h2 class="text-2xl font-bold text-center mb-4">{{ isRegistering ? 'Register' : 'Login' }}</h2>
        <form @submit.prevent="login"  v-if="!isRegistering">
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
          </div>
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
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: "",
        isRegistering: false
      };
    },
    methods: {
      // login() {
      //   if (this.email === "archit@gmail.com" && this.password === "archit123") {
      //     this.$router.push({ name: "dashboard" });
      //   } else {
      //     alert("Invalid login credentials");
      //   }
      // },

      toggleForm() {
        this.isRegistering = !this.isRegistering;
        this.email = ""; 
        this.password = ""; 
        this.confirmPassword = "";
      },

      login() {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.email === this.email);

        if (user) {
          if (user.password === this.password) {
            localStorage.setItem("loggedInUser", JSON.stringify({ email: user.email, username: user.email.split('@')[0] }));
            this.$router.push({ name: "dashboard" });
          } else {
            alert("Incorrect password.");
          }
        } else {
            alert("No user found with this email.");
          }
      },
        
      register() {
        if (this.password !== this.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find(user => user.email === this.email);

        if (userExists) {
          alert("User already exists. Please login.");
          return;
        }
        const newUser = {
            email: this.email,
            password: this.password,
          };
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));

          localStorage.setItem("loggedInUser", JSON.stringify({ email: newUser.email, username: newUser.email.split('@')[0] }));
          alert("Registration successful and logged in.");
          this.$router.push({ name: "dashboard" });
        }
      },
    }
  </script>
  