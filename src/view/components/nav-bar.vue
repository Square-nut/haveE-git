<template>
  <div class="header">
    <div class="header-con">
      <a href=""
         class="logo"></a>
      <div class="logo_rt">
        <a href="">
          <h1>有翼云</h1>
          <p>助力企业打造自有生态链</p>
        </a>
      </div>
      <ul class="nav">
        <li class="active"><a href=""
             class="product-center">首页</a></li>
        <li class="product-dropdown"><a href="javascript:;"
             class="product-center">商家服务<i class="caret"></i></a>
          <div class="dropdown-menu-wrapper">
            <div class="dropdown-menu">
              <div class="item-container">
                <div class="item-product"><a href=""
                     class="item-product-link"><span class="icon-xls"></span>
                    <h3>新零售</h3>
                    <p>商城丨分销丨营销丨会员丨多商户管理</p>
                  </a></div>
                <div class="item-product"><a href=""
                     class="item-product-link"><span class="icon-xfw"></span>
                    <h3>新服务</h3>
                    <p>店铺丨会员丨营销丨外卖丨预约丨支付</p>
                  </a></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href=""
             class="product-center">渠道合作</a></li>
        <li><a href=""
             class="product-center">关于有翼</a></li>
        <li class="last login_common"><a target="_blank"
             class="btn-login"
             href="">登录</a>
        </li>
        <li class=" last register_common"><a target="_blank"
             href="/register.html">注册</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped>
/*header*/

.header {
  width: 100%;
  min-width: 1200px;
  height: auto;
  position: relative;
  background: #ffffff;
  border-bottom: 1px solid #ededed;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 200;
  transition: all 0.5s ease-in;
}

.header-con {
  box-sizing: border-box;
  margin: 0 auto;
  width: 1200px;
  height: 60px;
  zoom: 1;
}

.logo {
  display: inline-block;
  width: 74px;
  height: 34px;
  margin-top: 15px;
  background-size: 74px 34px;
  background-image: url(/static/assets/logo.png);
}

.logo_rt {
  display: inline-block;
  width: 160px;
  margin-left: 15px;
}

.logo_rt h1 {
  color: #1d2c39;
  font-size: 20px;
  font-family: "黑体";
  line-height: 20px;
}

.logo_rt p {
  color: #a2a2a2;
  font-size: 12px;
}

.nav {
  float: right;
  zoom: 1;
}

.nav > li {
  float: left;
  display: inline-block;
  height: 60px;
  line-height: 60px;
  padding: 0px 30px;
}

.nav > li .product-center {
  font-size: 14px;
}

.nav > li:hover .product-center {
  color: #0092dc;
  cursor: pointer;
}

.nav .caret {
  background-image: url(/static/assets/icons.png);
  background-repeat: no-repeat;
  background-size: auto;
}

.nav li.active a {
  color: #0092dc;
}

.nav .product-dropdown .caret {
  position: relative;
  display: inline-block;
  width: 14px;
  height: 10px;
  background-position: 0 0;
  margin-left: 5px;
}

.nav .product-dropdown:hover .caret {
  background-position: 0 -17px;
}

.nav .product-dropdown .dropdown-menu-wrapper {
  position: absolute;
  left: 0;
  border-bottom: 0.5px solid #e5e5e5;
  transform: rotate3d(1, 0, 0, -90deg);
  z-index: 100;
  max-height: 0px;
  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.07);
  transform-origin: 50% 0%;
  transition: 300ms ease-in-out;
  overflow: hidden;
  background-color: #fff;
  width: 100%;
}

.nav .dropdown-menu-wrapper .dropdown-menu {
  margin: 30px auto;
  width: 100%;
  max-width: 800px;
  zoom: 1;
  overflow: hidden;
}

.nav
  .dropdown-menu-wrapper
  .dropdown-menu.dropdown-menu__customer
  .item-container {
  width: 950px;
}

.nav .dropdown-menu-wrapper .dropdown-menu .item-product {
  width: 400px;
  box-sizing: border-box;
  height: 80px;
  float: left;
}

.nav .product-dropdown:hover .dropdown-menu-wrapper {
  -webkit-transform: rotate3d(0, 0, 0, 0deg);
  -moz-transform: rotate3d(0, 0, 0, 0deg);
  transform: rotate3d(0, 0, 0, 0deg);
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  transform-origin: 50% 0;
  max-height: 1000px;
}

.dropdown-menu-wrapper .dropdown-menu .item-container .item-product {
  position: relative;
}

.product-dropdown .dropdown-menu-wrapper .dropdown-menu .item-product-link {
  display: block;
  width: 100%;
  height: 100%;
}

.product-dropdown .dropdown-menu-wrapper .dropdown-menu .item-container span {
  width: 23px;
  height: 23px;
  position: absolute;
  left: 10px;
  top: 16px;
}

.product-dropdown .dropdown-menu-wrapper .dropdown-menu .item-product-link h3 {
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  padding: 16px 0px 23px 80px;
}

.product-dropdown .dropdown-menu-wrapper .dropdown-menu .item-product-link p {
  font-size: 12px;
  line-height: 12px;
  color: #999999;
  padding-left: 80px;
}

.product-dropdown
  .dropdown-menu-wrapper
  .dropdown-menu
  .item-container
  span.icon-xls {
  width: 60px;
  height: 60px;
  background: url(/static/assets/lingshou.png);
}

.product-dropdown
  .dropdown-menu-wrapper
  .dropdown-menu
  .item-container
  span.icon-xfw {
  width: 60px;
  height: 60px;
  background: url(/static/assets/fw.png);
}

.nav li.last {
  padding: 0px 0px 0px 20px;
}

.nav li.login_common a {
  width: 80px;
  height: 30px;
  line-height: 28px;
  display: inline-block;
  border: 1px solid #2b90ed;
  color: #2b90ed;
  text-align: center;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
}

.nav li.login_common a:hover {
  background-color: #2b90ed;
  color: #fff;
}

.nav li.register_common a {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
  background-color: #2b90ed;
  color: #ffffff;
  text-align: center;
  border-radius: 2px;
  cursor: pointer;
}
</style>
