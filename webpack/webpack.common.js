const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  plugins: [
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
        test: /\.(otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, '..', 'src', 'common', 'utils'),
      '@styles': path.resolve(__dirname, '..', 'src', 'common', 'styles'),
      '@types': path.resolve(__dirname, '..', 'src', 'common', 'types'),
      '@constants': path.resolve(__dirname, '..', 'src', 'common', 'constants'),
      '@icons': path.resolve(__dirname, '..', 'src', 'common', 'icons'),
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
      '@http': path.resolve(__dirname, '..', 'src', 'http'),
      '@pages': path.resolve(__dirname, '..', 'src', 'pages'),
      '@routes': path.resolve(__dirname, '..', 'src', 'routes'),
      '@mock-data': path.resolve(__dirname, '..', 'src', 'mock-data'),
    },
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
