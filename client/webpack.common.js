const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  // Ponto de entrada
  entry: {
    app: path.resolve(__dirname, "src/index.js")
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
      swDest: 'sw.js',
      // external content caching
      runtimeCaching: [
        {
          urlPattern: new RegExp(/^https:\/\/worldcup.sfg.io\/matches\/current/),
          handler: 'networkFirst',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: new RegExp(/^https:\/\/worldcup.sfg.io/),
          handler: 'staleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ]
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  // arquivos de saída
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: "[name].chunk.js",
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
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src'),
      img: path.resolve(__dirname, 'src/img/'),
      components: path.resolve(__dirname, 'src/components'),
    }
  }
}