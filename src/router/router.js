import { createRouter, createWebHistory } from 'vue-router';

import PageHome from '../components/pages/PageHome.vue';
import PageProfile from '../components/pages/PageProfile.vue';
import PagePeople from '../components/pages/PagePeople.vue';
import PageRegister from '../components/pages/PageRegister.vue';
import PageLogin from '../components/pages/PageLogin.vue';
import TheFooter from '../components/layout/TheFooter.vue';


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