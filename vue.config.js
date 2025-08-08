const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js'
    }
  },
  lintOnSave: false, // 关闭eslint检查

  //开启代理服务区-----单一代理
  // devServer: {
  //   //目标服务器
  //   proxy:  'http://localhost:5000'
  // }

  //开启代理服务区-----多级代理
  devServer: {
    //目标服务器
    proxy:{
      // '/api'是请求的前缀
      //当请求的前缀是/api时，代理服务器会将请求转发到目标服务器
      '/api':{
        //目标服务器
        target: 'http://localhost:5000',
        // 目标服务器不需要/api前缀，所以需要重写路径
        pathRewrite: {'^/api' : ''},
        changeOrigin: true, //说谎 自己来自5000  ----控请求头的host
        ws: true, //是否允许websocket跨域
      },
      '/api2':{
        target: 'http://localhost:5001',
        pathRewrite: {'^/api2' : ''},
        changeOrigin: true,
        ws: true,
      }
    }
  }
})
