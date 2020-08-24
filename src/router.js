import Vue from 'vue';
import Router from 'vue-router';
import home from './pages/Home.vue';
import favoritos from './pages/Favoritos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      component: favoritos,
    },
  ],
});
