const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// devtool: false, // This option controls if and how source maps are generated.
	entry: {
		main: './src/index.js',
		vendor: './src/vendor.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					esModule: false
				}
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[contenthash].[ext]',
							outputPath: 'images'
						}
					}
				]
			}
		]
	}
};
