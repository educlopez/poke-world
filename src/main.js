import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faTimesCircle,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faHeart,
  faTimesCircle,
  faSquare,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
