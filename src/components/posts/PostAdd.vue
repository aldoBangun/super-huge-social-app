<template>
   <base-card class="flex gap-4" :class="focusedCard" @click="toggleForm(false)" >
      <div class="rounded-full w-12 h-12 overflow-hidden">
         <img
            :src="image"
            :alt="firstName + '-image'"
            class="card-image"
            v-if="isExistImage"
         />
         <div class="bg-gray-200 w-full h-full" v-else>{{ textAvatar }}</div>
      </div>
      <form @submit.prevent="addPost" class="flex-1">
         <textarea
            type="text"
            class="form-control block w-full resize-none bg-gray-200 overflow-hidden  p-2 mb-4"
            :class="roundType"
            v-model="postContent"
            :rows="formRows"
            @focus="toggleForm(true)"
            @click.stop
         ></textarea>
         <base-button
            type="submit"
            class=""
         >
            <b-icon-upload></b-icon-upload>
            Post
         </base-button>
      </form>
   </base-card>
</template>

<script>
import { BIconUpload } from "bootstrap-icons-vue";
import { mapGetters, mapActions } from "vuex";

export default {
   components: {
      BIconUpload,
   },
   data() {
      return {
         postContent: "",
      };
   },
   computed: {
      ...mapGetters({
         isActiveForm: "isFocusPostForm",
      }),
      focusedCard() {
         return this.isActiveForm ? "shadow-lg" : "";
      },
      formRows() {
         return this.isActiveForm ? 3 : 1
      },
      roundType() {
         return this.isActiveForm ? 'rounded-lg' : 'rounded-full'
      }
   },
   methods: {
      ...mapActions({
         toggleForm: "togglePostForm",
      }),
   },
};
</script>
