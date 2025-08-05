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
})
