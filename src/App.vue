<template>
   <TheHeader />
   <div class="w-1/2 mx-auto">
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

body {
   background-color: #f2f2f2;
   font-family: 'Poppins', sans-serif;
}

</style>