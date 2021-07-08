<template>
   <TheHeader />
   <div class="w-1/3 mx-auto">
      <router-view></router-view>
   </div>
</template>


<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
   components: {
      TheHeader
   }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

:focus {
   outline: none;
}

body {
   @apply bg-gray-100;
   font-family: 'Poppins', sans-serif;
}

</style>