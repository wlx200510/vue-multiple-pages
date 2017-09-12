// 此文件待修改
const ONLINE_HOST = ''
const STAGE_HOST = 'http://localhost:8090/'

var host="";
if(/staging.mi.xxx.com/.test(location.href)){
    host=STAGE_HOST; //确定是测试环境
}else if(/mi.xxx.com/.test(location.href)){
    host=ONLINE_HOST; //确定是线上环境
}else{
    host=STAGE_HOST; // 默认值可以写成本地联调的地址
}
module.exports = {
    host: host
}