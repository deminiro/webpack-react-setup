const { merge } = require('webpack-merge');
const path = require('path');
const Dotenv = require('dotenv-webpack');

const commonConfig = require('../webpack/common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'webpack-dev-server/client?https://localhost:3000',
    './index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new Dotenv({
      path: `./configs/development/.env`,
      safe: true,
    })
  ],
  devtool: 'eval-cheap-module-source-map'
});