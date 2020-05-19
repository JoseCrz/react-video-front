const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const { DEV } = require('./src/config')

const entry = ['./src/frontend/index.js']
let mode = 'production'

if (DEV) {
  entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true')
  mode = 'development'
}

module.exports = {
  entry,
  mode,
  output: {
    path: path.resolve(__dirname, 'src/backend/public'),
    filename: DEV ? 'assets/app.js' : 'assets/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    minimize: true,
    minimizer: [ new TerserPlugin() ],
    splitChunks: {
      chunks : 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: DEV ? 'assets/vendor.js' : 'assets/vendor-[hash].js',
          enforce: true,
          test (module, chunks) {
            const name = module.nameForCondition && module.nameForCondition()
            return chunks.some(chunk => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name))
          }
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            'loader': 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    DEV ? new webpack.HotModuleReplacementPlugin() : () => {},
    DEV ? () => {} : new CompressionWebpackPlugin({
      test: /\.js$|\.css$/,
      filename: '[path].gz'
    }),
    DEV ? () => {} : new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: DEV ? 'assets/app.css' : 'assets/app-[hash].css'
    })
  ]
}