module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config.module
      .rule('images')
        .set('parser', {
          dataUrlCondition: {
            maxSize: 1000 * 1024 // 1024 = 1KiB
          }
        })
  }
}
