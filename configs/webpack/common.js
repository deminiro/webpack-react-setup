const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack');

const context = path.resolve(__dirname, '../../src');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      components: path.resolve(context, 'components'),
      shared: path.resolve(context, 'shared'),
      pages: path.resolve(context, 'pages'),
      libs: path.resolve(context, 'libs'),
      types: path.resolve(context, 'types'),
      assets: path.resolve(context, 'assets'),
      api: path.resolve(context, 'api'),
      hooks: path.resolve(context, 'hooks'),
      utils: path.resolve(context, 'utils'),
    }
  },
  context,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?url=false', options: { importLoaders: 1 } },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        type: 'asset/resource'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[fullhash].css',
    }),
    new webpack.ProvidePlugin({
      "React": "react",
    }),
  ],
  performance: {
    hints: false,
  },
};