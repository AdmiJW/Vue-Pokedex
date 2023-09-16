
// Import basic libraries
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar, Dialog } from 'quasar';
import { VueQueryPlugin } from '@tanstack/vue-query';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css';

// Import Quasar CSS
import 'quasar/src/css/index.sass';

// Importing application CSS styles
import '@assets/styles/main.css';
import '@assets/styles/fonts.css';

import App from '@src/App.vue';
import router from '@src/router';


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);
app.use(Quasar, { 
    plugins: {
        Dialog,
    }
});

app.mount('#app');
