import Vue from "vue";
import Vuex from "vuex";
import { REVERSE_DRAWER } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationDrawer: null
  },
  mutations: {
    [REVERSE_DRAWER](state) {
      state.navigationDrawer = !state.navigationDrawer;
    }
  },
  actions: {},
  modules: {}
});
