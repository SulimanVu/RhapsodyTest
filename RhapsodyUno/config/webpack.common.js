const HtmlWebpackPlugin = require('html-webpack-plugin');
const DefinePlugin = require('webpack').DefinePlugin;

const moduleAlias = require('./moduleAlias');
const paths = require('./paths');
const mfConfig = require('./mf.config');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: paths.build,
    filename: `${mfConfig.uno.name}/[contenthash].bundle.js`,
    chunkFilename: `${mfConfig.uno.name}/[contenthash].bundle.js`,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['node_modules', paths.src],
    alias: moduleAlias,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'esbuild-loader',
        options: {
          target: 'es2020',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|swf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: `${mfConfig.uno.name}/img/[name]-[hash:6][ext]`,
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: `${mfConfig.uno.name}/fonts/[name]-[hash:6][ext]`,
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: `${mfConfig.uno.name}/icons/[name]-[hash:6][ext]`,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new DefinePlugin({
      'process.env': {},
    }),
  ],
};
