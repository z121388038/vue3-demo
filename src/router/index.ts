import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/Index.vue';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    // redirect: '/home',
    children: [
      {
        path: '',
        name: '首页',
        component: () => import('@/views/HomeView.vue'),
      },
    ],
  },
  {
    path: '/video',
    name: '视频播放',
    component: Layout,
    children: [
      {
        path: '',
        name: '视频播放',
        component: () => import('../views/Video.vue'),
      },
    ],
  },
  {
    path: '/component-info',
    name: '深入组件',
    component: Layout,
    children: [
      {
        path: '',
        name: '深入组件',
        component: () => import('@/views/component-info/index.vue'),
      },
    ],
  },
  {
    path: '/setup',
    name: '组合式Api',
    component: Layout,
    children: [
      {
        path: '',
        name: '组合式Api',
        component: () => import('@/views/Setup.vue'),
      },
    ],
  },
  {
    path: '/reactive',
    name: '响应式Api',
    component: Layout,
    children: [
      {
        path: '',
        name: '响应式Api',
        component: () => import('@/views/reactive-api/Index.vue'),
      },
      {
        path: 'watchEffect',
        name: 'watchEffect',
        component: () => import('@/views/reactive-api/WatchEffect.vue'),
      },
      {
        path: 'watch',
        name: 'watch',
        component: () => import('@/views/reactive-api/Watch.vue'),
      },
    ],
  },
  {
    path: '/life-cycle',
    name: '生命周期',
    component: Layout,
    children: [
      {
        path: '',
        name: '生命周期',
        component: () => import('@/views/life-cycle/LifeCycle.vue'),
      },
    ],
  },
  {
    path: '/directive',
    name: '自定义指令',
    component: Layout,
    children: [
      {
        path: '',
        name: '自定义指令',
        component: () => import('@/views/Directive.vue'),
      },
    ],
  },
  {
    path: '/test',
    name: '多层级菜单',
    component: Layout,
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
    path: '/docs',
    name: 'docs',
    component: Layout,
    children: [
      {
        path: 'https://v3.cn.vuejs.org/api/',
        name: 'Vue3',
        redirect: 'https://v3.cn.vuejs.org/api/',
      },
      {
        path: 'https://router.vuejs.org/zh/guide/',
        name: 'Vue Router',
        redirect: 'https://router.vuejs.org/zh/guide/',
      },
      {
        path: 'https://cli.vuejs.org/zh/guide/',
        name: 'Vue Cli',
        redirect: 'https://cli.vuejs.org/zh/guide/',
      },
      {
        path: 'https://vuex.vuejs.org/zh/index.html',
        name: 'Vuex',
        redirect: 'https://vuex.vuejs.org/zh/index.html',
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
