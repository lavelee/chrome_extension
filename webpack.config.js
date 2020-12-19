const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pathFromRoot = path_string => path.resolve(__dirname, path_string);

const copyFilesTask = (function(){
  const opt = { patterns: [
    {from: pathFromRoot('src/manifest.json'), to: pathFromRoot('dist/manifest.json')},
    {from: pathFromRoot('src/popup/popup.html'), to: pathFromRoot('dist/popup/popup.html')},
    {from: pathFromRoot('src/popup/popup2.html'), to: pathFromRoot('dist/popup/popup2.html')},
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

module.exports = [{
  entry: { content: './src/content.js', background: './src/background.js' },
  output: { path: pathFromRoot('dist') },
}, {
  entry: { popup: './src/popup/popup.js' },
  output: { path: pathFromRoot('dist/popup') },
  module: { rules: [ supportSCSS ] }, // js 파일에서 요상한 확장자 import 시 tranpiling
  plugins: [ copyFilesTask, purgeDistFolderTask ], // bunding 로직과 관계없는 작업들. 마지막 webpack 작업에서 수행하자.
}];