import { getUserInfo, login } from "../../api/user";
import { removeToken, setToken } from "../../util/cookie";

export default {
  LOGIN({ commit }, payload) {
    return new Promise((resolve, reject) => {
      login(payload)
        .then(res => {
          const { token } = res.data;
          commit("SET_TOKEN", token);
          setToken(token);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  GET_USER_INFO({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo()
        .then(({ data }) => {
          if (data.roles && data.roles.length > 0) {
            commit("SET_INFO", data);
          } else {
            reject("获取用户信息失败！");
          }
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  FONT_LOGOUT({ commit }) {
    return new Promise(resolve => {
      removeToken();
      commit("FONT_LOGOUT");
      resolve();
    });
  }
};
