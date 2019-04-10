const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const glob = require('glob')

let pages = {}
let entryPath = 'src/pages/'

process.env.VUE_APP_IP = process.env.NODE_ENV === 'production' ? 'widget://html/' : 'http://192.168.2.164:8080/'

glob.sync(`${entryPath}**/index.js`).forEach(function (name) {
  let key = name.slice(entryPath.length, -9)
  pages[ key ] = {
    // page 的入口
    entry: `${entryPath}${key}/index.js`,
    // 模板来源
    template: `src/index.html`,
    // 在 dist/index.html 的输出
    filename: `html/${key}.html`
    // chunks: [ 'chunk-vendors', 'chunk-common', key ]
  }
})

// 拼接路径
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '../../' : '/',
  filenameHashing: false,
  outputDir: 'dist',
  chainWebpack: config => {
    config.externals = [
      { api: 'window.api' }
    ]
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ['console.log']// 移除console
            }
          }
        })
      ]
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `
                    @import "~@/assets/colorUi/app.scss";
                    @import "~@/assets/css/config.scss";
                `
      }
    }
  },
  pages: pages
}
