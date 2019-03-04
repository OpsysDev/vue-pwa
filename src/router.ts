import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Plants from './views/Plants.vue';
import Month from './views/Month.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/plants',
      name: 'plants',
      component: Plants
    },
    {
      path: '/month',
      name: 'month',
      component: Month
    }
  ]
});
