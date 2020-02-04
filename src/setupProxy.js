const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://frost.met.no',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};
