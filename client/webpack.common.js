const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
      template: 'public/index.html',
    }),
    // Gera o arquivo manifest.json
    new WebpackPwaManifest({
      name: 'World Cup 2018 PWA',
      short_name: 'WC2018PWA',
      description: 'A simple World Cup 2018 PWA',
      start_url: '/',
      background_color: '#ffffff',
      theme_color: '#3273dc',
      icons: [
        {
          src: path.resolve('src/img/wc_2018.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        {
          src: path.resolve('src/img/wc_2018.png'),
          size: '1024x1024' // you can also use the specifications pattern
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      swDest: 'sw.js',
      navigateFallback: '/',
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
      components: path.resolve(__dirname, 'src/components'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      img: path.resolve(__dirname, 'src/img/'),
      modules: path.resolve(__dirname, 'src/modules'),
    }
  }
}