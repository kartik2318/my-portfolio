const path = require('path');

module.exports = {
  entry: './public/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // other webpack configuration settings...
  resolve: {
    fallback: {
      "path": false,
      "os": false,
      "crypto": false,
    },
  }
};
