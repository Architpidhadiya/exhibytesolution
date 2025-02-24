// import { createApp } from 'vue'


// createApp(App).mount('#app')

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue'
import Home from "./components/Home.vue";
import About from "./components/About.vue";

//const Home = { template: "<h1>Home Page</h1>" };
//const About = { template: "<h1>About Page</h1>" };

const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount("#app");
