import Vue from "vue";
import VueRouter from "vue-router";
import constRouter from "./common";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constRouter
});

export default router;
