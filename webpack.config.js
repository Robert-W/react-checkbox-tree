var bundlePath = __dirname + (process.env.ENV === 'prod' ? '/build' : '/src');

module.exports = {
	entry: {
    bundle: __dirname + '/src/js/main.js'
  },
  output: {
    path: bundlePath,
    filename: "/js/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "jsx-loader?harmony" },
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  externals: {
    "react": "React",
  },
  resolve: {
    alias: {
      'js': __dirname + '/src/js',
      'css': __dirname + '/src/css'
    }
  }
};