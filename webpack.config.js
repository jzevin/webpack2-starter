const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const options = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {pretty: true}
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'Webpack 2 - Starter! Now with Pug',
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/index-template.pug'
    })
  ]
}
module.exports = options;
