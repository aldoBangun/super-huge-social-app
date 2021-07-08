import { createApp } from 'vue';

import App from './App.vue';
import router from './router/router.js';
import store from './store/index.js';

// Global Components
import BaseButton from './components/UI/BaseButton';
import BaseCard from './components/UI/BaseCard';
import './index.css';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');