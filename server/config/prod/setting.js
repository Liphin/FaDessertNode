/**
 * Created by Administrator on 2018/11/3.
 */
let settingData = {
    basePath: "/root/fa/dessert/node", //基础路径
    domainName: "https://dessert.liphin.com", //域名设置
    isProd: true, //是否为生产环境
    frontPort: 3302, //前端port
};
//其他配置
settingData['projectPath'] = settingData['basePath'] + "/output/public";
settingData['resourcePath'] = settingData['basePath'] + "/resource";


//http和https服务开启
let certConfig = {
    key: '/root/fa/dessert/node/cert/dessert.key',
    cert: '/root/fa/dessert/node/cert/dessert.crt',
};


//小程序应用配置
let appConfig = {
    appid: 'wx6da8ac15c2cf2279',
    secret: '49d4f13b66eca5a8a7360168a7b1ac8c',
};

//允许的origin
let allowedOrigin = [
    'https://dessert.liphin.com'
];

module.exports = {
    settingData: settingData,
    appConfig: appConfig,
    certConfig: certConfig,
    allowedOrigin: allowedOrigin,
};
