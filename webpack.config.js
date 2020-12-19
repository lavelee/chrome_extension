const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathFromRoot = path_string => path.resolve(__dirname, path_string);

const copyFilesTask = (function(){
  const opt = { patterns: [
    {from: pathFromRoot('src/manifest.json'), to: pathFromRoot('dist/manifest.json')},
    {from: pathFromRoot('src/popup.html'), to: pathFromRoot('dist/popup.html')},
  ]};
  return new CopyPlugin(opt);
})(); 

const purgeDistFolderTask = (function(){
  return new CleanWebpackPlugin();
})();

const supportSCSS = {
  test: /\.s[ac]ss$/i,
  use: [
    "style-loader", // Creates `style` nodes from JS strings
    "css-loader", // Translates CSS into CommonJS
    "sass-loader", // Compiles Sass to CSS
  ],
};

module.exports = {
  entry: {
    content: './src/content.js',
    background: './src/background.js',
    popup: './src/popup.js',
  },
  output: {
    filename: '[name].js',
    path: pathFromRoot('dist'),
  },
  module: { // js 파일에서 요상한 확장자 import 시 tranpiling
    rules: [
      supportSCSS,
    ],
  },
  plugins: [ // bunding 로직과 관계없는 작업들
    copyFilesTask, 
    purgeDistFolderTask,
  ],
};