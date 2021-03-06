import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/assets/style.css';

import AsyncComputed from 'vue-async-computed';
import VueMoment from 'vue-moment';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* const moment = require('moment'),
require('moment/locale/fr'),
Vue.use(require('vue-moment'), {
  moment;
}), */

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMoment);
Vue.use(AsyncComputed);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
