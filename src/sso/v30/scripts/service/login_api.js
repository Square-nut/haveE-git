//模块名
var login_api = {
    //获取验证码
    getVerifyCode : {
        url:"/api-portal/api/register/generatorSMSCode",
        method: 'GET',
        auth: false
    },
    //检验信息注册
    registCheck : {
        url:"/api-portal/api/register/add",
        method: 'POST',
        auth: false
    }
}
