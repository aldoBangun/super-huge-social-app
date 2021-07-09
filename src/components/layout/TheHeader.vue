<template>
   <header class="bg-white mb-8">
      <nav class="vw-80 mx-auto h-20 flex-center justify-between">
         <div>
            <router-link to="/" class="text-blue-500 text-2xl font-bold">
               Tweetbookram
            </router-link>
         </div>

         <form @submit.prevent="searchUser" class="w-80 relative">
            <input type="text" v-model="inputedKeyword" class="w-full rounded-full bg-gray-100 pl-10 pr-4 py-1">
            <base-button class="absolute top-1/2 left-1 transform -translate-y-1/2 text-gray-500">
               <b-icon-search></b-icon-search>
            </base-button>
         </form>

         <div class="text-lg">
            <ul
               class="nav-page flex-center gap-4 text-gray-400"
               v-if="isAuthenticatedUser"
            >
               <li>
                  <router-link to="/">Home</router-link>
               </li>
               <li>
                  <router-link to="/profile">Profile</router-link>
               </li>
               <li>
                  <router-link to="/people">People</router-link>
               </li>
               <li>
                  <base-button>Logout</base-button>
               </li>
            </ul>
            <ul class="nav-user flex-center gap-4" v-else>
               <li>
                  <router-link
                     class="text-blue-500 hover:text-blue-700"
                     to="/login"
                     >Sign In</router-link
                  >
               </li>
               <li>
                  <router-link
                     class="flex-center text-white bg-blue-500 hover:bg-blue-700 h-8 px-4 rounded-full"
                     to="/register"
                     >Sign Up</router-link
                  >
               </li>
            </ul>
         </div>
      </nav>
   </header>
</template>

<script>
import { BIconSearch } from 'bootstrap-icons-vue'

export default {
   components: {
      BIconSearch
   },
   data() {
      return {
         isAuthenticatedUser: true,
         inputedKeyword: ''
      };
   },
   methods: {
      searchUser() {
         console.log('user')
      }
   }
};
</script>

<style scoped>
.flex-center {
   @apply flex items-center;
}

.nav-page .link-active {
   @apply text-black;
}
</style>
