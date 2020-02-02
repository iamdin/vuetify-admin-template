import Layout from "../components/layout/Layout";

export default [
  {
    path: "/login",
    name: "Login",
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "Login" */ "@/views/Login")
  },
  {
    path: "/404",
    name: "NotFound",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/NotFound")
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "mdi-view-dashboard" },
        component: () =>
          import(/* webpackChunkName: "Dashboard" */ "@/views/Dashboard")
      }
    ]
  },
  {
    path: "/github",
    component: Layout,
    meta: { roles: ["admin"] },
    children: [
      {
        path: "",
        name: "Github",
        meta: { title: "Github", icon: "mdi-github-circle" },
        component: () =>
          import(/* webpackChunkName: "Github" */ "@/views/Github")
      }
    ]
  }
];

export const NotFound = {
  path: "*",
  redirect: "/404",
  hideInMenu: true
};
