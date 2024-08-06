import './styles/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(autoAnimatePlugin).mount('#app');
