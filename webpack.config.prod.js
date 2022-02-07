const { merge } = require('webpack-merge');

module.exports = merge(require('./webpack.config'), {
	mode: 'production',
	target: ['web', 'es5'],
	devtool: false,
});
