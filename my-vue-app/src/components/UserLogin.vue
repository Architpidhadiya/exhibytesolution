<template>
    <div class="login">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="input-group">
                <label for="email">Email: </label>
                <input type="email" id="email" v-model="email" required />
            </div>

            <div class="input-group">
                <label for="password">Email: </label>
                <input type="email" id="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const router = ref('')

const handleLogin = () => {
    if (email.value === 'archit@gmail.com' && password.value === 'archit123') {
        alert('Login Successful')
        router.push('/dashboard')
    } else {
        errorMessage.value = 'Invalid email or Password'
    }
}
</script>