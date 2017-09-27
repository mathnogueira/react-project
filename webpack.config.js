const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR		= path.resolve(__dirname, 'src/public');
const APP_DIR		= path.resolve(__dirname, 'src/app');
const SASS_DIR		= path.resolve(__dirname, 'src/style');

const extractSass = new ExtractTextPlugin({
	filename: "[name].css",
	disable: process.env.NODE_ENV === 'development'
});

let config = {
	entry: {
		scripts:	APP_DIR + '/index.jsx',
		styles:		SASS_DIR + '/style.sass'
	},
	output: {
		path: BUILD_DIR,
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.sass/,
				use: extractSass.extract({
					use: [{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					}],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.jsx?/,
				use: [{ loader: 'babel-loader' }]
			}
		],
		/*
		 *loaders: [
		 *    {
		 *        test: /\.jsx?/,
		 *        include: APP_DIR,
		 *        loaders: ['react-hot-loader', 'babel-loader']
		 *    },
		 *    {
		 *        test: /\.sass/,
		 *        include: SASS_DIR,
		 *        loaders: ['sass-loader', 'css-loader', 'style-loader']
		 *    }
		 *]
		 */
	},
	plugins: [
		extractSass
	]
};

module.exports = config;
