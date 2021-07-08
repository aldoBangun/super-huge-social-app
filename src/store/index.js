import { createStore } from 'vuex';


const store = createStore({
   modules: {},
   state() {
      return {
         isFocusPostForm: false
      }
   },
   getters: {
      isFocusPostForm(state) {
         return state.isFocusPostForm
      }
   },
   mutations: {
      SET_FOCUS_POST_FORM(state, payload) {
         state.isFocusPostForm = payload
      }
   },
   actions: {
      togglePostForm(context, payload) {
         context.commit('SET_FOCUS_POST_FORM', payload)
      }
   }
});


export default store;