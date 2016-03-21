module.exports = {
  entry: "./src/javascript/app.js",
  output: {
    filename: "public/bundle.js"
  },
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
      }
    ]
  }
}
