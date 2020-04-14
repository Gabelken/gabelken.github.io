import 'material-icons/iconfont/material-icons.css';
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide);

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax);

import App from './App.vue'

Vue.config.productionTip = false;

import Home from "./components/MainPages/Home";
import Portfolio from "./components/MainPages/Portfolio";
import HelloOverworld from "./components/PortfolioPages/Arduino/HelloOverworld";
import ReadingGlassesPlus from "./components/PortfolioPages/Arduino/ReadingGlassesPlus";

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio/:cardset',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/arduino/hello-overworld',
      name: 'hello-overworld',
      component: HelloOverworld
    },
    {
        path: '/portfolio/arduino/reading-glasses-plus',
        name: 'reading-glasses-plus',
        component: ReadingGlassesPlus
    },
];
const router = new VueRouter({
    mode: "history",
    routes: routes
});
router.push('/home');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');