module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-search',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '使用豆瓣api创建小应用' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/icon.css' }
    ],
    script:[
      { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
	  '@nuxtjs/proxy'
  ],
  axios:{
    //是否开启跨域
    proxy:true
  },
  proxy: {
    '/api': {
      target: 'http://apis.juhe.cn', // 目标接口域名    
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
      '^/api': '', // 把 /api 替换成
      }
    }
  }
}
