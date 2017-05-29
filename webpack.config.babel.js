import path from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const config = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/assets',
    library: 'ReactIoT',
    umdNamedDefine: true,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

if (process.env.WEBPACK_ENV !== 'production') {
  config.context = path.resolve(__dirname, './example');
  config.entry = './',
  config.devtool = 'source-map';
  config.plugins = [
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"dev"'
    })
  ]
} else {
  config.context = path.resolve(__dirname, './src');
  config.entry = './index.js',
  config.output.filename = 'index.js';
  config.plugins = [
    new UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'WEBPACK_ENV': '"production"'
    })
  ]
}

module.exports = config;
