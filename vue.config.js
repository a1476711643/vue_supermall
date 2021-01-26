module.exports = {
    configureWebpack: {
        resolve:{
            // extensions:['.js','.css','.vue'], //可以不写后缀名
            alias:{
                'assets':'@/assets', //@  =  src  脚手架3配置过了
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}