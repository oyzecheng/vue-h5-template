const autoprefixer = require('autoprefixer')
const pxToRem = require('postcss-pxtorem')

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 9000,
    open: false
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxToRem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: '@'
      }
    }
  }
}
