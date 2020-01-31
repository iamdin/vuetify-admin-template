const Mock = require("mockjs");
Mock.mock("/login", {
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  code: 200,
  token: "vuetify-admin"
});
