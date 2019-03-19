const merge = require('webpack-merge');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => merge([
  {
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      new OptimizeCssAssetsPlugin(),
      new Visualizer({ filename: './statistics.html' })
    ],
  },
]);

module.exports = env => merge(baseConfig(env), prodConfiguration(env));
