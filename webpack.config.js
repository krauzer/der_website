var webpack = require('webpack');

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './client/app/src/index.js'
  ],
  output: {
    path: __dirname + '/client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve :{
    extensions: ['','.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  devServer: {
    contentBase: './client/dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}