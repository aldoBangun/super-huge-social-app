<template>
   <button class="bg-blue-500 text-white inline-flex h-8 gap-2 px-6 items-center rounded-full">
      <slot></slot>
   </button>
</template>


<style scoped>

.btn {
   cursor: pointer;
   border: none;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   height: 2rem;
   padding-left: 1.5rem;
   padding-right: 1.5rem;
   background-color: var(--clr-blue);
   border-radius: 9999rem;
}

.btn:hover {
   background-color: var(--clr-blue-2);
}

.btn-md {
   height: 2.5rem;
}

.btn-lg {
   height: 3rem;
   min-width: 10rem;
}

.btn-flat {
   color: var(--clr-gray);
   background-color: transparent;
}

.btn-flat:hover {
   filter: brightness(.8);   
}

.btn-icon {
   padding: 0;
   background-color: transparent;
}

</style>