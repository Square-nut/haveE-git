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
    centerURL: 'http://test-omo.300.cn',
    baseURL: 'http://test-api-console.aiyouyi.cn',
    portalURL: 'http://test-api-console.aiyouyi.cn/api-portal/',
    shopURL: 'http://test-api-shop.aiyouyi.cn',
    CASURL: 'http://test-account.aiyouyi.cn/CAS/omologin'
  }
})