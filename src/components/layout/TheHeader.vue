<template>
   <header>
      <nav class="vw-80 mx-auto h-20 flex-center justify-between">
         <div>
            <router-link to="/" class="text-blue-500 text-2xl font-bold"
               >Tweetbookram</router-link
            >
         </div>
         <div class="text-lg">
            <ul class="nav-page flex-center gap-4 text-gray-400" v-if="isAuthenticatedUser">
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
export default {
   data() {
      return {
         isAuthenticatedUser: true
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
