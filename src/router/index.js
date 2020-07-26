import { createRouter, createWebHistory } from 'vue-router';
import PasswordCheck from '../views/PasswordCheck.vue';

const routes = [
  {
    path: '/',
    name: 'PasswordCheck',
    component: PasswordCheck,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
