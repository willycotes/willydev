const path = require('path');
const root = process.cwd();
const eslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

/** @type {import('webpack').Configuration} */

module.exports = {
  context: path.resolve(root, 'src'),
  output: {
    // publicPath: 'assets/dist/',
    assetModuleFilename: 'images/[name][ext]',
  },
  resolve: {
    extensions: ['.js', 'scss', 'css'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: [path.resolve(root, 'node_modules/')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'images/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
    ],
  },
  plugins: [
    // new eslintWebpackPlugin(),
    // new StylelintPlugin(),
  ],
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
};
