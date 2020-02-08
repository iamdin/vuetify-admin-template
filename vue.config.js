module.exports = {
  // 文件打包后 在index.html中引用的位置，与 process.env.BASE_URL相同
  publicPath:
    process.env.NODE_ENV === "production" ? "/vuetify-admin-template/" : "/",
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  }
};
