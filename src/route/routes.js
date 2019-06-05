// 路由采用分块加载
// require.ensure([], () => r(require('模块地址')), '模块名(模块名相同的所有模块会打包成一个文件)')
console.log(require('@view/home').default, 'route')
export default [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    component: require('@view/home').default
  },
  {
    path: '/agent',
    component: require('@view/agent').default
  },
  {
    path: '/agent-result',
    component: require('@view/agent-result').default
  }
]