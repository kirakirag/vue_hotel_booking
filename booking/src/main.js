import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import authStore from './store/auth';

const app = createApp(App);

authStore.methods.initializeAuth();

app.use(router);
app.mount('#app');
