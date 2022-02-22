const { resolve } = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

const commonConfig = require('../webpack/common');

const context = resolve(__dirname, '../../src');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './index.tsx',
  output: {
    filename: 'js/bundle.[name].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/',
  },
  devServer: {
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    static: './dist',
  },
  plugins: [
    new CleanWebpackPlugin({
      root: resolve(__dirname, './'),
      cleanAfterEveryBuildPatterns: ['build'],
      verbose: true,
      dry: false,
    }),
    new OptimizeCSSAssetsPlugin({}),
    new Dotenv({
      path: `./configs/release-prod/.env`,
      safe: true,
    }),
    new CopyPlugin({
      patterns: [
        { from: resolve(context, './assets/favicon.ico'), to: "" },
      ],
    }),
  ],

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true,
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false,
        },
      }),
    ],
  },
});