const compress = require('koa-compress')

module.exports = {
  templatePath: 'src/index.html', // HTML Template to render pages (relative to your project path)
  paths: {
    main: './src/main', // File where you do a new Vue
    router: './src/router/', // File where you do a new Router
    store: './src/state/store' // File where you do a new Vuex.Store
  },
  /**
   * Plugins
   */
  plugins: {
    // Theses plugins will be only included on client side
    progress: {
      src: '@/plugins/progress',
      ssr: false
    }
  },
  ssr: {
    server(app) {
      // `app` is the Koa instance here
      app.use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept'
        )
        ctx.set(
          'Access-Control-Allow-Methods',
          'POST, GET, PUT, DELETE, OPTIONS'
        )
        await next()
      })
      // С gzip сжатием на выходе получилось в 6 раз меньше
      app.use(
        compress({
          filter: function(content_type) {
            return /text/i.test(content_type)
          },
          threshold: 2048,
          flush: require('zlib').Z_SYNC_FLUSH
        })
      )
    }
  }
}
