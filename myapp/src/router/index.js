import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import UserDashboard from '../components/UserDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,  
});

export default router;
