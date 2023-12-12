import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home-page.vue';
import About from '@/views/About-page.vue';
import User from '@/views/User-page.vue';

Vue.use(Router);

export default new Router ({
  mode: 'history',
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
    //   path: '/user/:username',
    //   name: 'user',
    //   component : User,
    // },
     {
      path: '/user/:username',
      name: 'user',
      component : User,
      props: true
    }
    // {
    //   path: '/about',
    //   redirect: {name: 'about'}
    // }
  ]
});