module.exports = {
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    port: 8080,
    // 设置代理
    proxy: {
        '/api': {
            // 目标 API 地址
            target: 'http://localhost:9090',
            // 将主机标头的原点更改为目标URL
            changeOrigin: false
        }
    }
  }
}
