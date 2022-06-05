import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: Layout,
    // redirect: 'noredirect',
    redirect: '/test/test1',
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: () => import('@/views/test/Test1.vue'),
      },
      {
        path: 'test2',
        name: 'test2',
        component: () => import('@/views/test/Test2.vue'),
      },
      {
        path: 'test3',
        name: 'test3',
        component: () => import('@/views/test/Test3.vue'),
        children: [
          {
            path: 'test3-1',
            name: 'test3-1',
            component: () => import('@/views/test/Test3-1.vue'),
          },
          {
            path: 'test3-2',
            name: 'test3-2',
            component: () => import('@/views/test/Test3-2.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
      },
    ],
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
  {
    path: '/life-cycle',
    name: '生命周期',
    component: () => import('@/views/life-cycle/LifeCycle.vue'),
  },
  {
    path: '/directive',
    name: '自定义指令',
    component: () => import('@/views/Directive.vue'),
  },
  {
    path: '/reactive',
    name: '响应式Api',
    component: () => import('@/views/reactive-api/Index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // routes: routes.map((item) => {
  //   if (item.children) {
  //     item.children.map((item2) => {
  //       item2.path = `${item.path}${item2.path}`;
  //       return item2;
  //     });
  //   }
  //   return item;
  // }),
});

export default router;
