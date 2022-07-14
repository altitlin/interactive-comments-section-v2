const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'src', 'assets') },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      {
        test: /\.svg$/,
        use: [ '@svgr/webpack' ],
      },
    ],
  },
  resolve: {
    alias: {
      '@icons': path.resolve(__dirname, '..', 'src', 'common', 'icons'),
      '@styles': path.resolve(__dirname, '..', 'src', 'common', 'styles'),
      '@types': path.resolve(__dirname, '..', 'src', 'common', 'types'),
      '@utils': path.resolve(__dirname, '..', 'src', 'common', 'utils'),
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@feature': path.resolve(__dirname, '..', 'src', 'feature'),
      '@http': path.resolve(__dirname, '..', 'src', 'http'),
      '@navigation': path.resolve(__dirname, '..', 'src', 'navigation'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
    },
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
