(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ?
    (module.exports = factory()) :
    typeof define === 'function' && define.amd ?
    define(factory) :
    (global.__ce = factory())
})(this, function () {
  return {
    _: {},
    debug: true,
    timeout: '15000',
    centerURL: 'http://www.aiyouyi.cn',
    baseURL: 'http://new-api-console.aiyouyi.cn',
    portalURL: 'http://new-api-console.aiyouyi.cn/api-portal/',
    platformURL: 'http://new-api-console.aiyouyi.cn/api-platform/',
    shopURL: 'http://api-shop.aiyouyi.cn',
    CASURL: 'http://account.aiyouyi.cn/CAS/omologin'
  }
})