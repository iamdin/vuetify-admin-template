import mutations from "./mutations";
import actions from "./actions";
import { getToken } from "../../util/cookie";

export default {
  namespaced: true,
  state: {
    token: getToken(),
    info: {
      name: "",
      avatar: "",
      roles: []
    }
  },
  mutations,
  actions,
  getters: {
    userRole: state => state.info.roles
  }
};
