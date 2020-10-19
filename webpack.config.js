const path = require('path');
// 載入 html-webpack-plugin (第一步)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: {
    index : './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback : true,
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
      'vuex': 'vuex/dist/vuex.esm-bundler',
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
        {
            test: /\.(s[ac]ss|css)$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },

        {
            test: /\.vue$/,
            use: [
              {
                loader: 'vue-loader'
              }
            ]
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        // 配置 HTML 模板路徑與生成名稱 (第三步)
        template: './dist/index.html',
        filename: 'index.html',
      }),
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ]
};