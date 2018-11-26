const appConfig = require('./src/app.config')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  },
  configureWebpack: {
    devtool: 'source-map',
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: appConfig.title,
    // Set up all the aliases we use in our app.
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  pwa: {
    debug: true,
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      templatedUrls: {
        '/': 'index.ssr.html'
      },
      runtimeCaching: [
        {
          urlPattern: new RegExp('/.*.(png|jpg|jpeg|svg|gif|woff|eot|ttf)/'),
          handler: 'networkFirst',
          options: {
            cacheName: 'allCache',
            expiration: {
              maxEntries: 1000,
              maxAgeSeconds: 60 * 10
            }
          }
        }
      ]
    }
  },
  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        { before: require('./tests/mock-api') })
  }
}
