import Vue from 'vue';
import Router from 'vue-router';
import home from './pages/home.vue';
import favorites from './pages/favorites.vue';

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
      path: '/favorites',
      name: 'favorites',
      component: favorites,
    },
  ],
});
