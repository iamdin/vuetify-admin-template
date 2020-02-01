const renderRouterView = { render: h => h("router-view") };

export default [
  {
    path: "/examples",
    name: "Examples",
    meta: {
      title: "Examples",
      icon: "mdi-folder-table",
      roles: ["admin"]
    },
    redirect: { name: "Form" },
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout"),
    children: [
      {
        path: "form",
        name: "Form",
        meta: { title: "Form", icon: "mdi-id-card", roles: ["user"] },
        component: () =>
          import(/* webpackChunkName: "Form" */ "@/views/examples/Form")
      },
      {
        path: "table",
        name: "Table",
        meta: { title: "Table", icon: "mdi-table" },
        component: () =>
          import(/* webpackChunkName: "Table" */ "@/views/examples/Table")
      }
    ]
  },
  {
    path: "/nested",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "mdi-xbox-controller-menu",
      roles: ["editor"]
    },
    redirect: { name: "Menu1" },
    component: () =>
      import(/* webpackChunkName: "Layout" */ "@/components/layout/Layout"),
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: { title: "Menu1", roles: ["super_admin"] },
        component: () =>
          import(/* webpackChunkName: "Menu1" */ "@/views/nested/Menu1")
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
                /* webpackChunkName: "Menu2_1" */ "@/views/nested/menu2/Menu2_1"
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
