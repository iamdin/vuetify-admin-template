module.exports = {
  publicPath:
    process.env.NODE_ENV === "development" ? "/vuetify-admin-template/" : "/",
  transpileDependencies: ["vuetify"]
};
