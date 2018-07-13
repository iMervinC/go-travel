var path = require('path');

module.exports = {

	mode: 'development',
	entry: {
		App: "./app/assets/scripts/app.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "./app/temp"),
		filename: "[name].js"
	},

	module: {
	  rules: [
		    {
		      test: /\.js$/,
		      exclude: /node_modules/,
		      use: {
			       loader: 'babel-loader',
			        options: {
			          presets: ['es2015']
			        }
		      	}
		    }
	  	]
	}	


}