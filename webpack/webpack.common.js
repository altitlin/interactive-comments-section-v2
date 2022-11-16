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
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@context': path.resolve(__dirname, '..', 'src', 'context'),
      '@features': path.resolve(__dirname, '..', 'src', 'features'),
      '@hooks': path.resolve(__dirname, '..', 'src', 'hooks'),
      '@lib': path.resolve(__dirname, '..', 'src', 'lib'),
      '@navigation': path.resolve(__dirname, '..', 'src', 'navigation'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
      '@styles': path.resolve(__dirname, '..', 'src', 'styles'),
    },
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
