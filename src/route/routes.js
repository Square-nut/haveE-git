// 路由采用分块加载
// require.ensure([], () => r(require('模块地址')), '模块名(模块名相同的所有模块会打包成一个文件)')
export default [{
  path: '/',
  redirect: '/home',
}, {
  path: 'home',
  component: r =>
    require.ensure([], () => r(require('@view/home')), '模块名(模块名相同的所有模块会打包成一个文件)')
}, {
  path: '/agent',
  component: require.ensure([], () => r(require('@view/agent')), '模块名(模块名相同的所有模块会打包成一个文件)')
}, {
  path: '/agent-result',
  component: require.ensure([], () => r(require('@view/agent-result')), '模块名(模块名相同的所有模块会打包成一个文件)')
}]