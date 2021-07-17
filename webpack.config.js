const path = require('path');

module.exports = {
	mode: 'development',
	// devtool: false, // This option controls if and how source maps are generated.
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
