import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "../views/auth/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/",
    name: "Dashboard",
    component: () => import("../layouts/Dashboard.vue"),
    children: [
      {
        path: "/affiliate",
        name: "Affiliate",
        component: () => import("../views/dashboard/Affiliate.vue")
      },
      {
        path: "/promotion",
        name: "Promotion",
        component: () => import("../views/dashboard/Promotion.vue")
      },
      {
        path: "/mange-members",
        name: "Manage Members",
        component: () => import("../views/dashboard/ManageMember.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
