// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Axios from "axios";
// window.axios = Axios;
window.axios = require('axios');

//custom
window.apiUrl = 'http://localhost:3000';

window.$ = window.jQuery = require('jquery');
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
