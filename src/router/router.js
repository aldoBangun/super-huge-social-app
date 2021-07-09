import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '../components/pages/PageHome.vue';


const router = createRouter({
   history: createWebHistory(),
   routes: [
      {
         name: 'home',
         path: '/',
         component: PageHome
      },
      {
         name: 'profile',
         path: '/profile',
         component: PageProfile
      },
      {
         name: 'people',
         path: '/people',
         component: PagePeople
      },
      {
         name: 'register',
         path: '/register',
         components: {
            default: PageRegister,
            TheFooter
         }
      },
      {
         name: 'login',
         path: '/login',
         components: {
            default: PageLogin,
            TheFooter
         }
      }
   ]
})

export default router;