var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const VueLoaderPlugin = require('vue-loader/lib/plugin')

function resolve(dir) {
  return path.join(__dirname, '/', dir)
}

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@view': resolve('src') + '/view',

    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
  ]
}
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new HtmlWebpackPlugin({
      title: '有翼云',
      template: 'index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
      favicon: 'favicon.ico'
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/home', '/contact'],

      renderer: new Renderer({
        inject: {
          foo: 'bar'
        },
        headless: true,
        renderAfterDocumentEvent: 'render-event'
      })
    })
  ])
} else {
  // NODE_ENV === 'development'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new HtmlWebpackPlugin({
      title: '有翼云',
      template: 'index.html',
      filename: 'index.html',
      favicon: 'favicon.ico'
    }),
  ])
}