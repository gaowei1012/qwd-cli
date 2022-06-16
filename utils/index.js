/*
 * @Author: mingwei
 * @Date: 2022-06-16 15:56:06
 * @LastEditors: mingwei
 * @LastEditTime: 2022-06-16 16:02:58
 * @FilePath: /qwd-cli/utils/index.js
 * @Description:
 */
const fs = require('fs');
const path = require('path');

// 同步删除文件夹&文件
function removeDir(dir) {
  let files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; i++) {
    let newPath = path.join(dir, files[i]);
    let stat = fs.statSync(newPath);
    if (stat.isDirectory()) {
      //如果是文件夹就递归下去
      removeDir(newPath);
    } else {
      //删除文件
      fs.unlinkSync(newPath);
    }
  }
  //如果文件夹是空的，就将自己删除掉
  fs.rmdirSync(dir);
}

module.exports = {
  removeDir,
};
