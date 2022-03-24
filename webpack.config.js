const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	context: __dirname,
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 6001,
	},
	target: 'web',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.json'],
		plugins: [new TsConfigPathsPlugin({ configFile: './tsconfig.json' })],
		mainFields: ['browser', 'main', 'module'],
		fallback: {
			console: false,
			crypto: false,
			Buffer: false,
			setImmediate: false,
			fs: false,
			path: require.resolve('path-browserify'),
		},
	},
	entry: {
		app: ['babel-polyfill', './src/index.tsx'],
	},
	output: {
		chunkFilename: `js/[name].bundle.js`,
		filename: '[name].js',
		publicPath: '',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /(\.css|\.scss|\.sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.eot(\?v=\d+.\d+.\d+)?$/,
				use: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]',
			},
			{
				test: /\.ico$/,
				use: 'file-loader?name=[name].[ext]',
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: 'file-loader?name=assets/images/[name].[ext]',
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader?limit=10000&mimetype=image/svg+xml&name=assets/svgs/[name].[ext]',
			},
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				use: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]',
			},
			{
				test: /\.(woff2?)$/,
				use: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]',
			},
		],
	},
};
