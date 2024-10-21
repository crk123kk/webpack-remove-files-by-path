const path = require("path");
const fs = require("fs");
const utils = require("../lib/utils");

function RemoveFilesByPathPlugin(options) {
  // 使用 options 设置插件实例……
  this.options = options;
}

RemoveFilesByPathPlugin.prototype.apply = function (compiler) {
  compiler.plugin("done", (compat) => {
    // 记录删除的文件
    // const unlinked = [];
    fs.readdir(path.resolve(this.options.targetPath), (err, files) => {
      if (files && files.length > 0) {
        files.forEach((file) => {
          if (this.options.targetList.indexOf(file) > -1) {
            utils.deleteFolder(path.resolve(this.options.targetPath + file));
            // unlinked.push(file);
          }
        });
      }
      // if (unlinked.length > 0) {
      //   console.log("删除文件: ", unlinked);
      // }
      // 打印删除后的文件夹下的文件
      // utils.printDir(this.options.targetPath);
    });
  });
};

module.exports = RemoveFilesByPathPlugin;
