
module.exports = {
  //准备配置webpack的config
  configureWebpack: {
    resolve: {
      alias: {
        //这里的@代表的是src，这里进行路径别名的配置
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}