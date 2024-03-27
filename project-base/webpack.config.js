const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // Указываем точки входа для разных файлов
  entry: {
    main: './src/js/main.js',
    index: './src/js/pages/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',

  },
  devtool: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }], // Копирование статики из папки public
    }),
    new MiniCssExtractPlugin(), // Делает стили отдельным файлом
  ],
  optimization: {
    minimize: true, // Включает минификацию
    minimizer: [
      new TerserPlugin(), // Минификация JavaScript
      new CssMinimizerPlugin(), // Минификация CSS
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
					],
				},
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
};