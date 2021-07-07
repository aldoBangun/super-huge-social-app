<template>
   <base-card>
      <div class="avatar">
         <img
            :src="image"
            :alt="firstName + '-image'"
            class="card-image"
            v-if="isExistImage"
         />
         <div class="card-image">{{ textAvatar }}</div>
      </div>
      <form @submit.prevent="addPost">
         <textarea
            type="text"
            class="form-control post-input"
            v-model="postContent"
            :rows="mode"
            @focus="toggleForm(true)"
            @blur="toggleForm(false)"
         ></textarea>
      </form>
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
