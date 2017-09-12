let host = require('./host-config.js').host

import axios from 'axios'

function rap(urlList) { // 给接口拼接host的辅助函数 不过现在字符串模板也非常好用
    let allUrlObj = {}
    Object.keys(urlList).forEach(key => {
        allUrlObj[key] = host + urlList[key]
    })
    return obj
}

function fetch(url, data = {}) {
    var target = host + url;
    return new Promise((resolve, reject) => {
        axios.post(target, data).then((res) => {
            // 根据数据结构来判断和处理
        })
    }).catch((err) => {
        // 执行错误时的逻辑
        console.log(err)
    })
}

export { rap, fetch }