const Mock = require("mockjs");
const Random = Mock.Random;
Random.extend({
  roles: function() {
    const roles = [
      ["root"],
      ["admin"],
      ["user"],
      ["root", "user"],
      ["root", "admin"],
      ["admin", "user"],
      ["root", "admin", "user"]
    ];
    return this.pick(roles);
  }
});
export default {
  /** 用户登陆 */
  login: Mock.mock("/login", {
    code: 200,
    data: {
      token: "vuetify-admin-token"
    }
  }),
  /** 获取用户信息 */
  getUserInfo: Mock.mock("/user/info", {
    code: 200,
    data: {
      roles: "@ROLES",
      name: "@NAME",
      avatar:
        // "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
        "https://d36jcksde1wxzq.cloudfront.net/saas-mega/whiteFingerprint.png"
    }
  }),
  /** 用户登出 */
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  })
};
