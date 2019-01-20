module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.1.7:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  }
}