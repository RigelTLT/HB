const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    salesRegions: "./src/components/sales-regions/sales-regions.js",
    catalog: "./src/components/catalog/catalog.js",
    blog: "./src/components/blog/blog.js",
    blogPage: "./src/components/blog-page/blog-page.js",
    bid: "./src/components/bid/bid.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    port: 8080,
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
      template: "./src/index.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      filename: "sales-regions.html",
      chunks: ["salesRegions", "main"],
      template: "./src/pages/sales-regions/sales-regions.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      filename: "catalog.html",
      chunks: ["catalog", "main"],
      template: "./src/pages/catalog/catalog.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      filename: "blog.html",
      chunks: ["blog", "main"],
      template: "./src/pages/blog/blog.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      filename: "blog-page.html",
      chunks: ["blogPage", "main"],
      template: "./src/pages/blog-page/blog-page.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      filename: "bid.html",
      chunks: ["bid", "main"],
      template: "./src/pages/bid/bid.html",
      favicon: "./public/assets/ico/containers.png",
    }),
    new HtmlWebpackPlugin({
      template: "./src/components/header/header.html",
      filename: "components/header/header.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/components/footer/footer.html",
      filename: "components/footer/footer.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "assets" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                silenceDeprecations: [
                  "mixed-decls",
                  "color-functions",
                  "global-builtin",
                  "import",
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
