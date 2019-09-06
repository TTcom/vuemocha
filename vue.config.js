var SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const path = require('path');

module.exports = {
	configureWebpack: {
	       plugins: [
	           new SkeletonWebpackPlugin({
	               webpackConfig: {
	                   entry: {
	                       app: path.resolve('./src/entry.js')
	                   }
	               }
	           })
	       ]
	
	}
	
}