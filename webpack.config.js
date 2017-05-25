const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';



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
          publicPath: '../' //needed for prod paths to be correct for extracted files and their contained paths
        })
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {pretty: isProd}
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:6].[ext]',
          outputPath: 'img/',
        }
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
      filename: 'css/main.css',
      disable: !isProd
    })
  ]
}
module.exports = options;
