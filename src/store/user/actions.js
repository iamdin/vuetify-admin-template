import { login } from "../../api/user";
import { setToken } from "../../util/cookie";

export default {
  LOGIN({ commit }, payload) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      login(payload)
        .then(res => {
          const { data } = res;
          commit("SET_TOKEN", data.token);
          setToken(data.token);
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
