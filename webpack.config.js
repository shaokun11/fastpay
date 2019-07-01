const path = require('path');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',
  entry: {
    fastid_api: './src/fastid.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: x => x.chunk.name.replace('_', '-') + '.js',
    library: '[name]',
    path: path.resolve(__dirname, 'dist-web'),
  }
};