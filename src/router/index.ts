import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/component-info",
    name: "深入组件",
    component: () => import("@/views/component-info/index.vue"),
    redirect: "/component-info/home",
    children: [
      {
        path: "/home",
        name: "首页",
        component: () => import("@/views/component-info/index.vue"),
      },
    ],
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
