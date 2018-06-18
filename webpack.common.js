const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Ponto de entrada
  entry: {
    app: './src/index.js',
    'layout.toolbar': './src/layout/Toolbar.js',
    'layout.container': './src/layout/Container.js',
  },
  plugins: [
    // Remove a pasta dist antes do build
    new CleanWebpackPlugin(['dist']),
    // Gera arquivo html do build a partir de um template
    new HtmlWebpackPlugin({
      hash: true,
      template: 'public/index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    })
  ],
  // arquivos de saída
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].bundle.js',
  },
  // configuração de import dos módulos pelo tipo
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ]
  }
}