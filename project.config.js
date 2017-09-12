var sftpConfig = {
    host: 'https://github.com/wlx200510', // 要连接的机器的host地址
    port: 22,
    user: 'tony',
    pass: '123',
    remotePath: '/opt/html/projectName' // 要把文件传输到的远程目录
}

module.exports = {
    sftpConfig: sftpConfig,
    devPage: 'detail' // 改成自己新建的页面项目，注意填写的是.html后缀的文件名字符串
}