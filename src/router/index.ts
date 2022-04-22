import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/component-info',
    name: '深入组件',
    component: () => import('@/views/component-info/index.vue'),
  },
  {
    path: '/setup',
    name: '组合式api',
    component: () => import('@/views/Setup.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes.map((item) => {
    if (item.children) {
      item.children.map((item2) => {
        item2.path = `${item.path}${item2.path}`;
        return item2;
      });
    }
    return item;
  }),
});

export default router;
