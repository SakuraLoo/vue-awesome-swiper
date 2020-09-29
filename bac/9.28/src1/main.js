// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import './assets/scss/index.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false

fastclick.attach(document.body);
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload, {
  preload: 1,
  error: require('assets/img/error.png'),
  loading: require('assets/img/loading.gif'),
  attempt: 1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})