var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpg$/, loaders: ["url-loader"]
      }
    ]
  }
};
