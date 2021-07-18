const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader, // 3. Extract CSS into seperate files
					// 'style-loader', // 3. Inject styles into DOM
					'css-loader', // 2. Turns css into commonjs
					'sass-loader' // 1. Turns sass into css
				]
			}
		]
	}
});
