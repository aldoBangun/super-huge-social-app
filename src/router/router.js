import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '../components/pages/PageHome.vue';


const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         name: 'page-home',
         path: '/',
         component: PageHome
      }
   ]
})

export default router;