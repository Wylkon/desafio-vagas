const path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/javascript/App.js')
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  modulesDirectories: [
    'node_modules'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },

      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },

      // Images
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },

      // SVGs
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  }
}
