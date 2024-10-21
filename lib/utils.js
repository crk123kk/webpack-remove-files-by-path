const fs = require("fs");
const path = require("path");
/**
 * 根据传入的路径删除对应的文件或者文件夹
 * 对于非空文件夹会先遍历删除文件夹下的文件然后删除文件夹
 * @param {*} path
 */
function deleteFolder(path) {
  let files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    if (files && files.length > 0) {
      files.forEach(function (file, index) {
        let curPath = path + "/" + file;
        if (fs.statSync(curPath).isDirectory()) {
          deleteFolder(curPath);
        } else {
          fs.unlinkSync(curPath);
        }
      });
    }
    fs.rmdirSync(path);
  }
}

/**
 * 在控制台打印路径下的所有文件或者文件夹名称
 * @param {*} path
 */
function printDir(targetPath) {
  fs.readdir(path.resolve(targetPath), (err, files) => {
    files.forEach((file) => {
      console.log("file", file);
    });
  });
}

const Utils = { deleteFolder, printDir };

module.exports = Utils;
