// 用于文件压缩并上传
var fs = require('fs')
var archiver = require('archiver')
var output = fs.createWriteStream(require('path').join(__dirname, '../') + '/vue-pages.zip')
var archive = archiver('zip', {zlib:{ level: 9 }}) // 压缩工具

archive.directory(require('path').join(__dirname, '../dist/')) //被压缩的文件
archive.pipe(output) //压缩文件的保存路径和文件名

archive.finalize() //压缩结束
