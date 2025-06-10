import { createRouter, createWebHistory } from "vue-router";
import { isAuthenticated } from "../guard/isAuthenticated";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/Home.vue"),
    },
    {
      path: "/student",
      name: "student",
      beforeEnter: [isAuthenticated],
      component: () => import("@/pages/student/Student.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      beforeEnter: [isAuthenticated],
      component: () => import("@/pages/admin/Admin.vue"),
    },
    {
      path: "/auth/admin",
      name: "auth-admin",
      component: () => import("@/pages/auth/admin/LoginAdmin.vue"),
    },
    {
      path: "/auth/student",
      name: "auth-student",
      component: () => import("@/pages/auth/student/LoginStudent.vue"),
    },
  ],
});
export default router;
