const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://openapi.naver.com",
      changeOrigin: true,
    })
  );
};
