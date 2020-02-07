const renderRouterView = { render: h => h("router-view") };

export default [
  {
    path: "/examples",
    name: "Examples",
    redirect: { name: "Form" },
    meta: {
      title: "Examples",
      icon: "folder-table",
      isGroup: true // 在根据角色筛选路由时，若原本有两个子路由，筛选后剩余一个，可保证父路由渲染为分组
    },
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout"),
    children: [
      {
        path: "form",
        name: "Form",
        meta: { title: "Form", icon: "id-card", roles: ["root"] },
        component: () =>
          import(/* webpackChunkName: "Form" */ "@/views/examples/Form")
      },
      {
        path: "table",
        name: "Table",
        meta: { title: "Table", icon: "table" },
        component: () =>
          import(/* webpackChunkName: "Table" */ "@/views/examples/Table")
      }
    ]
  },
  {
    path: "/nested",
    name: "Nested",
    redirect: { name: "Menu1" },
    meta: {
      title: "Nested",
      icon: "xbox-controller-menu"
    },
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout"),
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: { title: "Menu1" },
        component: () =>
          import(/* webpackChunkName: "Menu1" */ "@/views/nested/Menu1")
      },

      {
        path: "menu2",
        name: "Menu2",
        redirect: { name: "Menu2_1" },
        meta: { title: "Menu2", icon: "menu" },
        component: renderRouterView,
        children: [
          {
            path: "menu2_1",
            name: "Menu2_1",
            meta: { title: "Menu2-1" },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_1" */ "@/views/nested/menu2/Menu2_1"
              )
          },
          {
            path: "menu2_2",
            name: "Menu2_2",
            redirect: { name: "Menu2_2_1" },
            meta: {
              title: "Menu2-2",
              icon: "menu",
              roles: ["root"]
            },
            component: renderRouterView,
            children: [
              {
                path: "menu2_2_1",
                name: "Menu2_2_1",
                meta: { title: "Menu2-2-1" },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_1" */ "@/views/nested/menu2/menu2-2/Menu2_2_1"
                  )
              },
              {
                path: "menu2_2_2",
                name: "Menu2_2_2",
                meta: { title: "Menu2-2-2" },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_2" */ "@/views/nested/menu2/menu2-2/Menu2_2_2"
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
                /* webpackChunkName: "Menu2_3" */ "@/views/nested/menu2/Menu2_3"
              )
          }
        ]
      },
      {
        path: "menu3",
        name: "Menu3",
        meta: { title: "Menu3" },
        component: () =>
          import(/* webpackChunkName: "Menu3" */ "@/views/nested/Menu3")
      }
    ]
  }
];
