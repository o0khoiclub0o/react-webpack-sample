module.exports = {
  context: __dirname + "/app",
  // entry: "./app.js",
  entry: {
    javascript: "./app.jsx",
    html: "./index.html",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        // loader: 'babel-loader',
        loaders: ["react-hot", "babel-loader?presets[]=es2015&presets[]=react"],
        exclude: /node_modules/,
        // query: {
        //   presets: ['es2015', 'react']
        // }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ],
  },
}