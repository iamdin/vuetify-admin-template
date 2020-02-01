import actions from "./actions";
import constRouteMap from "../../router/common";

export default {
  namespaced: true,
  state: {
    routes: constRouteMap,
    asyncRoutes: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.asyncRoutes = routes;
      state.routes = constRouteMap.concat(routes);
    }
  },
  actions,
  getters: {
    routes: state => state.routes,
    asyncRoutes: state => state.asyncRoutes
  }
};
