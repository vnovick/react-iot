import path from 'path';
import webpack from 'webpack';

const config = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets',
    library: 'ReactIoT',
    libraryTarget: 'umd'
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
  config.context = path.resolve(__dirname, './src'),
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
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
