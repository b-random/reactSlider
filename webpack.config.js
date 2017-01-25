module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      //Example: 'public/components/Example.jsx'
      Progress: 'app/components/Progress.jsx',
      ProgressBar: 'app/components/ProgressBar.jsx',
      styles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};

//the webpack config file mimics the webpack terminal
//command. Run > $ webpack -w < to keep webpack running in
//background.

//Include alias to require modules without path

//jsx doesnt work through webpack w/o the babel loader.
//The presets tells babel to convert react code to es2015

//test:(regex) tells what to include, exclude: tells what
//to ignore
