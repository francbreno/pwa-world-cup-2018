const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  // source maps do código gerado
  devtool: 'inline-source-map',
  // servidor de desenvolvimento (webpack-dev-server)
  devServer: {
    host: '0.0.0.0',
    port: 8082,
    contentBase: './dist',
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  }
});