const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias:{
        '@com': path.resolve(__dirname, 'src')
      }
    }
  }
})
