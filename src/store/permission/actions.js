import asyncRoutesMap from "../../router/modules";

export default {
  async GENERATE_ROUTES({ commit }, roles) {
    console.log("当前角色：", ...roles);
    commit("SET_ROUTES", generateRoutes(roles));
  }
};

const generateRoutes = roles => {
  if (roles.includes("super_admin")) {
    console.log("当前角色：", roles);
    return asyncRoutesMap;
  }
  return filterRoutes(asyncRoutesMap, roles);
};

const filterRoutes = (routes, roles) => {
  const checkedRoutes = [];
  routes.forEach(item => {
    const temp = { ...item };
    // 查看路由是否含有roles属性，没有的不验证角色
    if (temp.meta && temp.meta.roles) {
      // 路由角色对比，用户roles中的一个元素在路由的roles中即可
      if (roles.some(role => temp.meta.roles.includes(role))) {
        checkedRoutes.push(temp);
        // 若路由含有子路由，递归验证子路由
        if (temp.children) {
          temp.children = filterRoutes(temp.children, roles);
        }
      }
    } else {
      checkedRoutes.push(temp);
    }
  });
  return checkedRoutes;
};
