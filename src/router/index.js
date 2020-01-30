import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

import NProgress from "nprogress"; // 进度条
import "nprogress/nprogress.css"; // 进度条样式

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.name === "Github") {
    setTimeout(() => {
      next();
    }, 3000);
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
