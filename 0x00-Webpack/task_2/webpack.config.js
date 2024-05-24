const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, './js/dashboard_main.js'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  performance: {
		maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
	},
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
