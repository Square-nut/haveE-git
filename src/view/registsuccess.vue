<template>

  <div class="regist-content">
    <div class="welcome-page">
      <div class="info">
        <div class="title"><i class=" iconfont icon-right"></i>
          <h2 class="text-result">欢迎您注册中企会员<br>我们将为您提供优质的在线服务与您一起构建企业信息化服务</h2>
        </div>
        <p class="text-id">
          我们为您提供了一个会员账号:
          <span class="id blue"
                id="account"></span> ,
          <br> 您可以使用会员账号登录或手机号登录
        </p>
        <div class="link">
          <p>现在您可以</p>
          <div class="btn"
               id="visitHomepage">继续访问官网</div>
          <div class="btn blue"><a href="javascript:void(0);"
               id="loginMemCenter"
               class="blue">登录会员中心</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//获取url中的参数
function getUrlParam (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}
$("#account").text(getUrlParam('user'));
$("#visitHomepage").bind('click', function () {
  if ((window.location.href).indexOf("service") !== -1) {
    window.location.href = getUrlParam('service');
  } else {
    window.location.href = "http://www.aiyouyi.cn";
  }
});
$("#loginMemCenter").bind('click', function () {
  window.location.href = "http://new-console.aiyouyi.cn";
  // window.location.href = getplatform() + '/platform';
});
</script>
<style scoped>

</style>

       