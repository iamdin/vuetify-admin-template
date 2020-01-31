import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import { getToken } from "../../util/cookie";

export default {
  state: {
    username: "",
    token: getToken(),
    avatar: ""
  },
  mutations,
  actions,
  getters
};
