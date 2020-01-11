const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== "production";

// it cleans unused webpack generated files (like main.js)
class MiniCssExtractPluginCleanup {
  constructor(deleteWhere = /\.js(\.map)?$/) {
    this.shouldDelete = new RegExp(deleteWhere)
  }
  apply(compiler) {
    compiler.hooks.emit.tapAsync("MiniCssExtractPluginCleanup", (compilation, callback) => {
      Object.keys(compilation.assets).forEach((asset) => {
        if (this.shouldDelete.test(asset)) {
          delete compilation.assets[asset]
        }
      })
      callback()
    })
  }
}

// webpack.config.js
module.exports = {
  mode: devMode ? "development" : "production",
  entry: ['./style.scss'],
  output: {
    path: path.resolve(__dirname, 'public')
  },
  devtool: devMode ? 'source-map' : 'eval-cheap-module-source-map',
  module: {
    rules: [
      // css/sass rules
      {
        test: /\.(sa|sc)ss$/,
        use: [
          // mincss extract plugin loader
          {
            // Extracts the CSS into a separate file and uses the
            // defined configurations in the 'plugins' section
            loader: MiniCssExtractPlugin.loader
          },

          // translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },

          // load postcss plugins
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                require('postcss-sort-media-queries')({
                  // available options: mobile-first, desktop-first, function(a, b)
                  // custom example: return a.localeCompare(b);
                  sort: 'mobile-first'
                }),
                require('autoprefixer')()
              ]
            }
          },

          // compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              implementation: require('sass'),
              sassOptions: {
                indentWidth: 2,
                includePaths: [
                    path.resolve(__dirname),
                    'node_modules/fastcss/scss'
                ],
              },
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "style.css" : "style.min.css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new MiniCssExtractPluginCleanup()
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
