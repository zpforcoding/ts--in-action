const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 每次构建之后清空dist目录
module.exports = {
  plugins: [new CleanWebpackPlugin()],
}
