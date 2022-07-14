const path = require('path')
const fs = require('fs')

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]_[local]_[hash:base64:8]' },
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    compress: true,
    port: 4242,
    open: true,
    hot: true,
    historyApiFallback: true,
    http2: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'certs', 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'certs', 'localhost.crt')),
    },
  },
}
