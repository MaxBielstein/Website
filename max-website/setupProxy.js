import { createProxyMiddleware } from 'http-proxy-middleware';

export default function proxyMiddleware(app) {
    app.use('/api', createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    }));
  };