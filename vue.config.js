module.exports = {
  // 应用的架设路径，CLI默认你的项目部署在域名的根目录下所以publicPath默认为/
  // 构建后的文件是否启用哈希命名
  filenameHashing: true,
  // 是否在save文件时lint代码, 需要先安装cli-plugin-eslint
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    // config.plugins.delete('prefetch-admin')
  },
  pages: {
    alpha: {
      // 入口文件
      entry: 'src/pages/alpha/main.js',
      // 入口的html文件位置
      template: 'public/alpha.html',
      // 入口html文件在构建后的输出文件名
      filename: 'alpha.html',
      // 网页标题栏标题内容
      title: 'alpha版',
      // 入口项目所需要的chunk(chunk-vendors：三方库，chunk-common：公共内容，alpha: 入口自己的chunk)
      chunks: ['chunk-vendors', 'chunk-common', 'alpha']
    },
    beta: {
      entry: 'src/pages/beta/main.js',
      template: 'public/beta.html',
      filename: 'beta.html',
      title: 'beta版',
      chunks: ['chunk-vendors', 'chunk-common', 'beta']
    }
  }
}