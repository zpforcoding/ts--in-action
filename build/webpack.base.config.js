const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: '/src/index.ts',
  output: {
    filename: 'app.js',
    path: '/dist/',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
            },
          },
        ],
        include: content => {
          return /src/.test(content)
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html',
    }),
  ],
}
