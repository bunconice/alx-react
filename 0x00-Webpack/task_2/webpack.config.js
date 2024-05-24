const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin');
const { NONAME } = require("dns");

module.exports = {
  mode: "production",
  devtool: false,
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    clean: true
  },
  performance: {
		maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
	},
  plugins: [new htmlWebpackPlugin(
    {
      template: './index.html'
    }
  )],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpe?g|svg|png|gif)$/i,
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
