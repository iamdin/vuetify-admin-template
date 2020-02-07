const Mock = require("mockjs");
export default {
  /** 用户登陆 */
  login: Mock.mock("/login", {
    code: 200,
    data: {
      token: "vuetify-admin-token"
    }
  }),
  /** 获取用户信息 */
  getUserInfo: Mock.mock("/userInfo", {
    code: 200,
    data: {
      roles: ["root"],
      name: "@NAME",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    }
  }),
  /** 用户登出 */
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  })
};
