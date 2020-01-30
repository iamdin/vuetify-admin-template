import Layout from "../components/layout/Layout";

const renderRouterView = { render: h => h("router-view") };

const routes = [
  {
    path: "/login",
    hideInMenu: true,
    component: () => import(/* webpackChunkName: "Github" */ "../views/Login")
  },
  {
    path: "/404",
    name: "NotFound",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "Github" */ "../views/NotFound")
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
          import(/* webpackChunkName: "Github" */ "../views/Dashboard")
      }
    ]
  },
  {
    path: "/examples",
    name: "Examples",
    meta: { title: "Examples", icon: "mdi-folder-table" },
    redirect: { name: "Form" },
    component: Layout,
    children: [
      {
        path: "form",
        name: "Form",
        meta: { title: "Form", icon: "mdi-id-card" },
        component: () =>
          import(/* webpackChunkName: "Form" */ "../views/examples/Form")
      },
      {
        path: "table",
        name: "Table",
        meta: { title: "Table", icon: "mdi-table" },
        component: () =>
          import(/* webpackChunkName: "Table" */ "../views/examples/Table")
      }
    ]
  },
  {
    path: "/nested",
    name: "Nested",
    meta: { title: "Nested", icon: "mdi-xbox-controller-menu" },
    redirect: { name: "Menu1" },
    component: Layout,
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: { title: "Menu1" },
        component: () =>
          import(/* webpackChunkName: "Menu1" */ "../views/nested/Menu1")
      },
      {
        path: "menu2",
        name: "Menu2",
        meta: { title: "Menu2", icon: "mdi-menu" },
        redirect: { name: "Menu2_1" },
        component: renderRouterView,
        children: [
          {
            path: "menu2_1",
            name: "Menu2_1",
            meta: { title: "Menu2-1" },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_1" */ "../views/nested/menu2/Menu2_1"
              )
          },
          {
            path: "menu2_2",
            name: "Menu2_2",
            meta: { title: "Menu2-2", icon: "mdi-menu" },
            redirect: { name: "Menu2_2_1" },
            component: renderRouterView,
            children: [
              {
                path: "menu2_2_1",
                name: "Menu2_2_1",
                meta: { title: "Menu2-2-1" },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_1" */ "../views/nested/menu2/menu2-2/Menu2_2_1"
                  )
              },
              {
                path: "menu2_2_2",
                name: "Menu2_2_2",
                meta: { title: "Menu2-2-2" },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_2" */ "../views/nested/menu2/menu2-2/Menu2_2_2"
                  )
              }
            ]
          },
          {
            path: "menu2_3",
            name: "Menu2_3",
            meta: { title: "Menu2-3" },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_3" */ "../views/nested/menu2/Menu2_3"
              )
          }
        ]
      },
      {
        path: "menu3",
        name: "Menu3",
        meta: { title: "Menu3" },
        component: () =>
          import(/* webpackChunkName: "Menu3" */ "../views/nested/Menu3")
      }
    ]
  },
  {
    path: "/github",
    component: Layout,
    children: [
      {
        path: "github",
        name: "Github",
        meta: { title: "Github", icon: "mdi-github-circle" },
        component: () =>
          import(/* webpackChunkName: "Github" */ "../views/Github")
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hideInMenu: true
  }
];

export default routes;
