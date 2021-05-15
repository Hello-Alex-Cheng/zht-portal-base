const { name } = require('./package.json')

module.exports = {
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*"
		}
	},
	configureWebpack: {
		output: {
			library: `${name}-[name]`,
			libraryTarget: 'umd',
			jsonpFunction: `webpackJsonp_${name}`
		}
	}
}
