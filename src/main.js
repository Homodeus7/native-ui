import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
} from '@fortawesome/free-regular-svg-icons';

library.add([
  faHeart,
  faHand,
  faAddressBook,
  faCreditCard,
  faLemon,
  faHourglass,
]);

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
