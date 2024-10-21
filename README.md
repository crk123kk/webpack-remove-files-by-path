##### 版本

    1.1.0 才是切实可用到项目中的

##### 使用

    // 加载插件
    npm install webpack-remove-files-by-path

    // 引入插件
    const RemoveFilesByPath = require('webpack-remove-files-by-path');

    // 使用插件
    // targetPath：要删除的文件路径
    // targetList：以及该路径下要删除的文件名
    new RemoveFilesByPath({targetPath: 'dist/apps/ideal3/assets/', targetList: ['i18n', 'json', 'mock']})
