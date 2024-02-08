const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ContextReplacementPlugin = require('webpack').ContextReplacementPlugin;
const { merge } = require('webpack-merge');

const mf = require('./mf');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new EsbuildPlugin({
        target: 'es2020',
        css: true,
      }),
    ],
  },
  plugins: [
    mf(true),
    new MiniCssExtractPlugin(),
    new ContextReplacementPlugin(/moment[/\\]locale$/, /ru|en-gb/),
  ],
});
