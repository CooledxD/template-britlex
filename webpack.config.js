const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode: mode,

  entry: {
    main: path.resolve(__dirname, 'src', 'main.js')
  },

  devtool: 'source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'src'),
      watch: true
    }
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/layout/pages', 'index.hbs'),
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'resolve-url-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp|ico)$/i,
        type: 'asset',
        generator: {
          filename: 'img/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.woff2$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.hbs$/i,
        loader: 'handlebars-loader',
        options: {
          knownHelpersOnly: false,
          inlineRequires: '\/img\/'
        },
      }
    ]
  }
}