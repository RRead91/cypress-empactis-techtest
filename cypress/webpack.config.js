const path = require("path")

function srcPath(subdir) {
  return path.join(__dirname, "../../library", subdir)
}

module.exports = {
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      fixtures: srcPath("fixtures"),
      fragments: srcPath("fragments"),
      helpers: srcPath("helpers"),
      models: srcPath("models"),
      pages: srcPath("pages"),
      context: srcPath("context"),
    },
  },
  node: { fs: "empty", child_process: "empty", readline: "empty" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.feature$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/loader",
          },
        ],
      },
      {
        test: /\.features$/,
        use: [
          {
            loader: "cypress-cucumber-preprocessor/lib/featuresLoader",
          },
        ],
      },
    ],
  },
}