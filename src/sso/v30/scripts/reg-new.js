var captcha = false;

$(function() {
  $("#verifyCode_position").hide(); // 发送验证码隐藏
  // slide验证插件使用
  $("#slide_box").slideToUnlock({
    text: "滚动滑块验证", //文本设置
    successFunc: function() {
      //拖动成功后的回调函数
      $(".slide_box .slide-to-unlock-progress").text("验证成功"); //成功后的文字显示
      $("#captcha").val(getCode());
      captcha = true;
      $("#captcha_hint").hide();
      checkCaptcha();
    }
  });

  $.ajax({
    url: "http://test.300.cn/api-portal/randImg/captcha?serverName=regist",
    type: "POST",
    dataType: "jsonp",
    jsonpCallback: "jsonpcallback",
    data: {},
    success: function(data) {
      initUA(data.data.code);
    }
  });

  /*****重置滑块验证********/
  function resetCaptcha() {
    if ($("#captcha_position").is(":hidden")) {
      // 如果已发送验证码，再次修改需要重置滑块验证
      $("#captcha_position").show();
      $("#verifyCode_position").hide();
      disabledRegisterButton();
    }
    captcha = false;
    $("#slide_box").slideToUnlock({
      text: "滚动滑块验证", //文本设置
      successFunc: function() {
        //拖动成功后的回调函数
        $(".slide_box .slide-to-unlock-progress").text("验证成功"); //成功后的文字显示
        $("#captcha").val(getCode());
        captcha = true;
        $("#captcha_hint").hide();
        checkCaptcha();
      }
    });
  }

    $("#verifyCode").blur(function () {
        if ($("#verifyCode").val() == "") {
            $(this).attr('placeholder', '短信验证码');
            $(this).attr('style', 'border-color: #dfdcdc;');
        }
    });


  function checkCaptcha() {
    if (checkForm()) {
      $("#captcha_position").hide();
      $("#verifyCode_position").show();
      $("#verifyCode_href").click();
      activateRegisterButton();
    } else {
      setTimeout(function() {
        resetCaptcha();
      }, 1000);
    }
  }

  function checkForm() {
    if (!checkEmail()) {
      return false;
    }
    if (!checkPassword()) {
      return false;
    }
    if (!checkPhone()) {
      return false;
    }
    if (!checkAccept()) {
      return false;
    }
    if (!captcha) {
      $("#captcha_hint").show();
      return false;
    }
    return true;
  }

  /*****激活注册按钮********/
  function activateRegisterButton() {
    $("#register_href").removeClass("register_opac");
    $("#register_href").on("click", function() {
      register();
    });
  }
  /*****禁用注册按钮********/
  function disabledRegisterButton() {
    $("#register_href").addClass("register_opac");
    $("#register_href").off("click");
  }

  /*********注册提交start*********************/
  function register() {
    if (!checkForm()) {
      return false;
    }
    if (!checkVerifyCode()) {
      return false;
    }

    $("#password").val(encodepwd($("#password").val()));
    var userRegisterForm = $("#userRegisterForm").serialize();
    $.ajax({
      url: jsCtx + "/userRegister/userRegister.do?method=myRegister",
      type: "post",
      data: userRegisterForm,
      async: false,
      cache: false,
      success: function(data) {
        var results = data.split("--");
        if (results[0] == "success") {
          var urlHref =
            jsCtx + "/views/registernew/mobile_register_success.jsp";
          if (results.length == 3) {
            if (results[2] == "1") {
              urlHref = results[1];
            }
          } else if (results.length == 4) {
            if (results[3] == "1") {
              urlHref = results[2];
            }
          }
          window.location.href = urlHref;
          return true;
        } else {
          $("#password").val("");

          if (results[0] == "902504") {
            errorHint(
              "verifyCode",
              "验证码错误",
              "验证码过期或未发送，请重新获取数字验证码！"
            );
          } else if (results[0] == "902400") {
            errorHint("verifyCode", "验证码错误");
          } else if (results[0] == "verify_code_is_error") {
            errorHint("verifyCode", "非法访问", "非法访问！");
          }
          return false;
        }
      },
      error: function() {
        $("#password").val("");
        return;
      }
    });
  }
  /*********注册提交end*********************/
});
