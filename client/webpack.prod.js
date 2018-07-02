const fs = require('fs');
const path = require('path');
const url = require('url');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function ensureSlash(path) {
  const hasSlash = path.endsWith('/');
  if (hasSlash) {
    return path;
  } else {
    return `${path}/`;
  }
}

const resolvePublicURL = (appDirectory) => {
  const packageJson = path.resolve(appDirectory, 'package.json');
  const homepageURL = require(packageJson).homepage;
  const pathName = url.parse(homepageURL).pathname;
  console.log(pathName);
  return ensureSlash(pathName);
};

const appDirectory = fs.realpathSync(process.cwd());

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.PUBLIC_URL': JSON.stringify(resolvePublicURL(appDirectory)),
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ]
      }
    ]
  }
});