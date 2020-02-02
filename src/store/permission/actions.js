import asyncRoutesMap from "../../router/modules";

export default {
  GENERATE_ROUTES({ commit }, roles) {
    console.log("当前角色：", ...roles);
    commit("SET_ROUTES", generateRoutes(roles));
  }
};

const generateRoutes = roles => {
  if (roles.includes("root")) {
    return asyncRoutesMap;
  }
  return filterRoutes(asyncRoutesMap, roles);
};

const filterRoutes = (routes, roles) => {
  const checkedRoutes = [];
  routes.forEach(item => {
    const temp = { ...item };
    // 查看路由是否含有roles属性，没有的验证子路由
    if (temp.meta && temp.meta.roles) {
      // 路由角色对比，用户roles中的一个角色在路由的roles中即可
      // 该路由通过角色验证子路由无需在验证，没有通过也不会验证子路由
      if (roles.some(role => temp.meta.roles.includes(role))) {
        checkedRoutes.push(temp);
      }
    } else {
      // 若路由含有子路由，递归验证子路由
      if (temp.children) {
        temp.children = filterRoutes(temp.children, roles);

        // 为小组的第一个添加重定向，解决在路由表中添加重定向，而重定向的页面不在角色路由筛选后的路由表中，导致面包屑绑定报错问题
        temp.redirect = { name: temp.children[0].name };
      }
      checkedRoutes.push(temp);
    }
  });
  return checkedRoutes;
};
