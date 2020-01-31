import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css";
// import { getToken } from "../util/cookie"; // 进度条样式

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 全局路由守卫，验证用户是否登录
router.beforeEach((to, from, next) => {
  NProgress.start();

  // if (getToken()) {
  //   console.log("has token");
  // } else {
  //   // 注意下面的if/else，如果只写 next('/login')，将一直跳转/login,导致堆栈溢出
  //   if ("/login" === to.path) {
  //     next();
  //   } else {
  //     next("/login");
  //   }
  // }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
