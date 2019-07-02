// 路由采用分块加载
// require.ensure([], () => r(require('模块地址')), '模块名(模块名相同的所有模块会打包成一个文件)')
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
    path: '/add-shop',
    component: require('@view/add-shop').default
  },
  {
    path: '/register',
    component: require('@view/register').default
  },
  {
    path: '/agent-result',
    component: require('@view/agent-result').default
  }
]