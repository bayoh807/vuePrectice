import './css/reset.css';
import './css/main.scss';

import { createApp } from 'vue';
import App from '@/componets/App.vue';
import router from '@/router';
import store  from '@/store';

createApp(App)  
.use(router)
.use(store)
.mount('#app');
