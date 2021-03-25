const path = require('path')
const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// this plugin is required to automatically load Vuetify components
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const _module = {
  rules: [
    {
      test: /\.(wav|mp3|webm)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            // it's important to specify [path], so it's passed to outputPath() function
            name: '[path][name].[ext]',
            // generate custom output path depending on package ID
            outputPath: path => {
              const matches = path.match(/^packages\/([a-z0-9-]+)\/.+\/([a-z0-9-_]+\.[a-z0-9]{3,4})$/i)

              return matches !== null && matches.length === 3
                ? `audio/${matches[1]}/${matches[2]}`
                : `${path.replace('resources/', '')}`
            }
          }
        }
      ]
    }
  ]
}

const plugins = [
  new VuetifyLoaderPlugin(),
  new SWPrecacheWebpackPlugin({
    cacheId: 'stake-pwa',
    filename: 'service-worker.js',
    minify: true,
    stripPrefix: 'public/',
    handleFetch: true,
    staticFileGlobs: [
      'public/**/*.{css,eot,svg,ttf,woff,woff2}',
      'public/js/{offline,pages}.js',
      'public/lang/*.json'
    ],
    navigateFallback: '/offline',
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\//,
        handler: 'networkFirst'
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'networkFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50
          }
        }
      },
      {
        urlPattern: /\/js\/[^.]+\.js$/,
        handler: 'networkFirst',
        options: {
          cacheName: 'js'
        }
      }
    ]
  })
]

const resolve = {
  alias: {
    '~': path.resolve(__dirname, 'resources/js'),
    packages: path.resolve(__dirname, 'packages')
  },
  extensions: ['.js', '.json', '.vue']
}

const optimization = {
  splitChunks: {
    minSize: 0,
    automaticNameDelimiter: '-',
    cacheGroups: {
      default: false, // To disable any of the default cache groups, set them to false.
      // packages: {
      //   maxAsyncRequests: 1,
      //   test: (module, chunks) => module.resource && module.resource.match(/\\packages\\[a-z0-9-]+\\resources\\.+\.vue$/),
      //   name: (module, chunks, cacheGroupKey) => {
      //     const gameId = module.resource.match(/\\packages\\([a-z0-9-]+)\\resources\\/)[1]
      //     const [name, ext] = (path.parse(module.resource).base).split('.')
      //     return `js/packages/${gameId}/${name}`
      //   }
      // },
      vueComponents: {
        test: module => module.resource && module.resource.match(/[\\/]js[\\/]components[\\/].+\.vue$/),
        name: 'js/components'
      },
      vueMixins: {
        test: module => module.resource && module.resource.match(/[\\/]js[\\/]mixins[\\/].+\.vue$/),
        name: 'js/mixins'
      },
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        // cacheGroupKey here is `vendor` as the key of the cacheGroup
        name: (module, chunks, cacheGroupKey) => {
          // get the module name (folder name in node_modules)
          const packageName = module.resource.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
          // npm package names are URL-safe, but some servers don't like @ symbols, so strip it
          return `js/vendor/${packageName.replace('@', '')}`
        }
      }
    }
  }
}


mix.webpackConfig({ module: _module, plugins, resolve, optimization })

mix
  .js('resources/js/app.js', 'public/js')
  .sourceMaps()

if (mix.inProduction()) {
  mix.version()
}
