/**
 * Created by Administrator on 2018/11/3.
 */
//全局数据配置
let settingData = {
    basePath: "G:/SoftwareOutSourcing/Fa/甜品/project", //基础路径
    domainName: "http://127.0.0.1:3302", //域名设置
    isProd: false, //是否为生产环境
    frontPort: 3302, //前端port
};
//其他配置
settingData['projectPath'] = settingData['basePath'] + "/node/public";
settingData['resourcePath'] = settingData['basePath'] + "/resource";


//http和https服务开启
let certConfig = {};

//小程序应用配置
let appConfig = {
    appid: 'wx6da8ac15c2cf2279',
    secret: '49d4f13b66eca5a8a7360168a7b1ac8c',
    // appid: 'wx694cbcac849ec2f0',
    // secret: 'a0e529ca54a1514e04b7dc2f930a6f26',
};

//允许的origin
let allowedOrigin = [
    'http://127.0.0.1:3302'
];

module.exports = {
    settingData: settingData,
    appConfig: appConfig,
    certConfig: certConfig,
    allowedOrigin: allowedOrigin,
};
