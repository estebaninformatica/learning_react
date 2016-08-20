const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8001";

module.exports = {
  entry: './app/components/main.jsx',
  output: {
    path: './public/',
    filename: "build.js",
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    noInfo: true, //  --no-info option
    hot: true,
    inline: true,
    port: PORT,
    host: HOST
  }
};


