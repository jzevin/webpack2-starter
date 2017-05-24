const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const options = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader','sass-loader'],
          publicPath: path.resolve(__dirname, 'dist')
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {pretty: true}
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    stats: 'minimal'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 2 - Starter! Now with Pug',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index-template.pug'
    }),
    new ExtractTextWebpackPlugin({
      filename: 'css/main.css'
      //disable: false,
      //allChunks: true
    })
  ]
}
module.exports = options;
