/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { merge } = require('webpack-merge')

const common = require('./webpack.common')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(common, envConfig)

  return config
}
