import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home-page.vue';
import About from '@/views/About-page.vue';

Vue.use(Router);

export default new Router ({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
      alias: '/about'
    },
    // {
    //   path: '/about',
    //   redirect: {name: 'about'}
    // }
  ]
});