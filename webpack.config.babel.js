import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import webpack from 'webpack';

const config = {
  context: path.resolve(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    publicPath: '/assets',
    library: 'ReactIoT',
    umdNamedDefine: true,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }, {
        test: /\.node$/,
        exclude: /node_modules/,
        use: { loader: 'node-loader' }
      }
    ]
  }
};

if (process.env.WEBPACK_ENV !== 'production') {
  config.context = path.resolve(__dirname, './example');
  config.entry = './index.js';
  config.devtool = 'source-map';
  config.plugins = [new webpack.DefinePlugin({ 'WEBPACK_ENV': '"dev"' })];
} else {
  config.context = path.resolve(__dirname, './src');
  config.target = 'node';
  config.externals = {
    bindings: true,
    serialport: true,
  };
  config.entry = './index.js';
  config.output.filename = 'index.js';
  config.plugins = [
    new UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.DefinePlugin({ 'WEBPACK_ENV': '"production"' })
  ];
}

module.exports = config;
