<template>
   <base-card>
      <div class="flex space-x-5">
         <div class="[avatar] rounded-full w-10 h-10 bg-blue">
            <img
               :src="image"
               :alt="firstName + '-image'"
               class="card-image"
               v-if="isExistImage"
            />
            <div v-else>{{ textAvatar }}</div>
         </div>
         <form @submit.prevent="addPost">
            <textarea
               type="text"
               class="form-control block w-full resize-none bg-grey-light rounded"
               v-model="postContent"
               :rows="mode"
               @focus="toggleForm(true)"
               @blur="toggleForm(false)"
            ></textarea>
         </form>
      </div>
   </base-card>
</template>

<script>
export default {
   data() {
      return {
         postContent: "",
         isActiveForm: false,
      };
   },
   computed: {
      mode() {
         return this.isActiveForm ? 3 : 1;
      },
   },
   methods: {
      toggleForm(mode) {
         this.isActiveForm = mode;
      }
   }
};
</script>

<style scoped></style>
