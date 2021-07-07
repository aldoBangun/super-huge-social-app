<template>
   <div class="card">
      <slot></slot>
   </div>
</template>

<style scoped>

.card {
   background-color: #fff;
   padding: 1.5rem;
   border-radius: 1rem;
}

.round-sm {
   border-radius: .5rem;
}

.round-lg {
   border-radius: 1.5rem;
}

.round-xl {
   border-radius: 2rem;
}

.round-full {
   border-radius: 9999rem;
}
</style>