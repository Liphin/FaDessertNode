/**
 * Created by Administrator on 2019/5/27.
 */
loginModule.controller('LoginCtrl', function ($scope, LoginDataSer, LoginSer) {
    var a = 123;
    let b = 456;
    let login = this;
    login.pageConfig = LoginDataSer.pageConfig;
    login.loginInfo = LoginDataSer.loginInfo;

    /**
     * 登录操作
     */
    login.loginOpt = function () {
        LoginSer.loginOpt()
    };

    /**
     * 注册操作
     */
    login.registerOpt = function () {
        LoginSer.registerOpt();
    }


});