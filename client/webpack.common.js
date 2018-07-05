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
      name: 'Russia 2018 Matches',
      short_name: 'Russia 2018',
      description: 'A simple PWA to track the Fifa World CUp Russia 2018 Matches',
      start_url: '/',
      orientation: 'any',
      background_color: '#3273dc',
      theme_color: '#3273dc',
      icons: [
        {
          src: path.resolve('src/img/wc_2018.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
      ]
    }),
    // Criar o service worker a partir de um template (swSrc)
    // new WorkboxPlugin.GenerateSW({
      new WorkboxPlugin.InjectManifest({ // para um um template para o SW a ser gerado (necessário para push notifications)
      swSrc: './public/sw.js',
      swDest: 'sw.js',
      // navigateFallback: '/',
      // clientsClaim: true,
      // skipWaiting: true,
      // // external content caching
      // runtimeCaching: [
      //   {
      //     urlPattern: new RegExp(/^https:\/\/worldcup.sfg.io\/matches\/current/),
      //     handler: 'networkFirst',
      //     options: {
      //       cacheableResponse: {
      //         statuses: [0, 200],
      //       },
      //     },
      //   },
      //   {
      //     urlPattern: new RegExp(/^https:\/\/worldcup.sfg.io/),
      //     handler: 'staleWhileRevalidate',
      //     options: {
      //       cacheableResponse: {
      //         statuses: [0, 200],
      //       },
      //     },
      //   },
      // ]
    }),
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
      app: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      helpers: path.resolve(__dirname, './src/helpers'),
      img: path.resolve(__dirname, './src/img'),
      modules: path.resolve(__dirname, './src/modules'),
    }
  }
}