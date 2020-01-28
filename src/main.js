import 'material-icons/iconfont/material-icons.css';
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax);

import App from './App.vue'

Vue.config.productionTip = false;

import Home from "./components/Home";
import HelloOverworld from "./components/HelloOverworld";

const routes = [
  { path: '/home', component: Home},
  { path: '/portfolio/hello-overworld', component: HelloOverworld }
];
const router = new VueRouter({
  routes
});
router.push('/home');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');