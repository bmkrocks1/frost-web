const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/frost-api',
    proxy({
      target: 'https://frost.met.no',
      changeOrigin: true,
      pathRewrite: {
        '^/frost-api': ''
      }
    })
  );
};
