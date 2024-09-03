const { merge } = require("webpack-merge");
const path = require("path"); // Tambahkan ini untuk mengakses 'path' module
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"), // Tentukan folder 'public' sebagai direktori output
    filename: "bundle.js", // Nama file output, bisa diubah sesuai kebutuhan
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
});
