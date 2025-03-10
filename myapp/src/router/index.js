import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import UserDashboard from '../components/UserDashboard.vue';

import PostsView from '../views/PostsView.vue';

const routes = [
  {
    // path: '/',
    path: '/login',
    name: 'login',
    component: (LoginPage),
   
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: UserDashboard,
  },
  {
    path: '/', 
    redirect: '/login',
  },

  {
    path: '/posts',
    name: 'posts',
    component: PostsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,  
});

export default router;
