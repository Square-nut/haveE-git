<template>
  <div>
    <div class="regist-content">
      <div class="header1">
        <h1 class="title">注册中企动力会员账号</h1>
        <span class="login">已有账号，去<a href="javascript:void(0);"
             id="login"
             class="blue">登录</a></span>
      </div>
      <div class="register">
        <form class="form"
              id="registForm">
          <div class="item">
            <span class="item-left"><span class="text-red">*</span>手机号码：</span>
            <div class="item-right">
              <input type="text"
                     class="input"
                     id="phoneNum"
                     name="phoneNum"
                     placeholder="手机号码作为登录账号">
            </div>
          </div>
          <div class="item">
            <span class="item-left">
              <span class="text-red">*</span>设置密码：</span>
            <div class="item-right">
              <input type="password"
                     class="input"
                     id="password"
                     name="password"
                     placeholder="建议使用至少两种字符组合">
              <div class="strength"
                   style="display: none;">
                <span class="tsl">强度</span>
                <div class="strength-bar"
                     id="strength-bar">
                  <span class="strength-1"></span>
                  <span class="strength-2"></span>
                  <span class="strength-3"></span>
                  <em id="tips"></em>
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <span class="item-left">
              <span class="text-red">*</span>确认密码：</span>
            <div class="item-right">
              <input type="password"
                     class="input"
                     id="rePassword"
                     name="rePassword"
                     placeholder="请再次输入密码">
            </div>
          </div>
          <div class="item"
               id="verifyCode_position">
            <span class="item-left">
              <span class="text-red">*</span>短信验证码：</span>
            <div class="item-right verify">
              <input type="text"
                     class="input"
                     id="verifyCode"
                     name="verification"
                     placeholder="请输入验证码">
              <div class="note"
                   id="getVerify">获取验证码</div>
            </div>
          </div>

          <div class="item"
               id="verifyCode_position">
            <span class="item-left"></span>
            <div class="item-right">
              <div style="position: relative;"
                   id="captcha_position">
                <div class="slide_box"
                     id="slide_box"
                     style="margin-top: 14px;margin-bottom: -4px;">
                </div>
                <div class="register_hint"
                     style="top: -3px;height: 20px;"
                     id="captcha_hint">
                  <span style="top:15px;"></span>
                  请拖动滑块进行验证！
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <div class="item">
            <span class="item-left"></span>
            <div class="item-right accept"
                 id="useComMail">
              <label class="check"><input type="checkbox"
                       class="checkbox"
                       id="checkbox"
                       checked="true">阅读并接受</label><span class="protocol text-protocol">《中企动力网站服务协议》</span>
            </div>
          </div>
          <div class="btn regist btn-submitForm"
               id="register_href">立即注册</div>
        </form>
      </div>
    </div>
    <div id="window-box"
         style="display: none;">
      <div class="pop-window"
           id="agree-window">
        <div class="title">请选择协议</div>
      </div>
      <div class="pop-window"
           id="fail-window">
        <div class="title">提交失败，请重新提交</div>
      </div>
    </div>

    <form id="fm"
          action=""
          method="post"
          target="ssoLoginFrame"
          style="display: none;">
      <span id="J_ErrorMsg"
            class="errormsg"></span>
      <input name="username"
             id="J_Username"
             type="text"
             placeholder="请输入会员账号/手机号/邮箱"
             value="" />
      <input name="password"
             type="password"
             id="J_Password"
             placeholder="请输入密码"
             value="" />

      <input type="hidden"
             name="checkCode"
             value="vsd" />
      <input type="hidden"
             name="isajax"
             value="true" />
      <input type="hidden"
             name="isframe"
             value="true" />
      <input type="hidden"
             name="execution"
             id="J_Execution"
             value="" />
      <input type="hidden"
             name="lt"
             value=""
             id="J_LoginTicket">
      <!--加密-->
      <input name="captcha"
             id="captcha"
             type="hidden"
             value="" />

      <input type="hidden"
             name="_eventId"
             value="submit" />
      <input name=""
             type="button"
             value="登录"
             id="logBtn"
             class="loginbanner" />
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
