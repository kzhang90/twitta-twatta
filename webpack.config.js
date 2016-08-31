var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    // webpack dev server host and port
    // 'only' prevents reload on syntax errors
    'webpack/hot/only-dev-server',
    // app's entry point
    './src/app-client.js'
  ],
  output: {
    path: path.join(__dirname, 'src', '/static'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  resolve: {
    moduleDirectories: ['node_modules', 'src'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
      }
    ]
  },
  devServer: {
    contentBase: './src/static/views',
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
}