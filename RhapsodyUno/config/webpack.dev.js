const DefinePlugin = require('webpack').DefinePlugin;
const ProgressPlugin = require('webpack').ProgressPlugin;
const { merge } = require('webpack-merge');

const mf = require('./mf');
const paths = require('./paths');
const commonConfig = require('./webpack.common');
const mfConfig = require('./mf.config');

module.exports = merge(commonConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  stats: 'errors-warnings',
  output: {
    publicPath: `http://localhost:${mfConfig.uno.port}/`,
  },
  devServer: {
    port: mfConfig.uno.port,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: true,
      logging: 'error',
      progress: true,
    },
    static: [
      {
        directory: paths.public,
      },
    ],
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
  plugins: [
    mf(false),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.STAND': JSON.stringify('dev'),
    }),
    new ProgressPlugin(),
  ],
});
