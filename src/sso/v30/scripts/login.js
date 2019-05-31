function GetEnvironmentLogin() {
  //环境
  switch (version) {
    case "dev":
      return "https://cas.300.cn";
    case "test":
      return "https://cas.300.cn";
    case "pre":
      return "https://pre-account.300.cn";
    default:
      return "http://account.aiyouyi.cn";
  }
}

var registService;
var registUsername;
var sendNoteOK;
var captcha = false;

$(function () {
  $("#verifyCode_position").hide(); // 发送验证码隐藏
  // slide验证插件使用
  $("#slide_box").slideToUnlock({
    text: "滚动滑块验证", //文本设置
    successFunc: function () {
      //拖动成功后的回调函数
      $(".slide_box .slide-to-unlock-progress").text("验证成功"); //成功后的文字显示
      $("#captcha").val(getCode());
      captcha = true;
      $("#captcha_hint").hide();
      checkCaptcha();
    }
  });

  checkCaptchas();
});

function checkCaptchas() {
  $.ajax({
    url: __ce.baseURL + "/api-portal/randImg/captcha?serverName=regist",
    type: "POST",
    dataType: "jsonp",
    jsonpCallback: "jsonpcallback",
    data: {},
    success: function (data) {
      initUA(data.data.code);
    }
  });
}

function checkForm() {
  if (!jQuery("#phoneNum").valid()) {
    $.message("请输入手机号", "error");
    return false;
  }
  if (!jQuery("#password").valid()) {
    $.message("请输入密码", "error");
    return false;
  }
  if (!jQuery("#rePassword").valid()) {
    $.message("两次密码不一致", "error");
    return false;
  }

  if (!captcha) {
    $("#captcha_hint").show();
    return false;
  }
  return true;
}

function checkCaptcha() {
  if (checkForm()) {
    $("#captcha_position").hide();
    $("#verifyCode_position").show();
    $("#getVerify").click();
  } else {
    setTimeout(function () {
      resetCaptcha();
    }, 100);
  }
}

/*****重置滑块验证********/
function resetCaptcha() {
  if ($("#captcha_position").is(":hidden")) {
    // 如果已发送验证码，再次修改需要重置滑块验证
    $("#captcha_position").show();
    $("#verifyCode_position").hide();
  }
  captcha = false;
  $("#slide_box").slideToUnlock({
    text: "滚动滑块验证", //文本设置
    successFunc: function () {
      //拖动成功后的回调函数
      $(".slide_box .slide-to-unlock-progress").text("验证成功"); //成功后的文字显示
      $("#captcha").val(getCode());
      captcha = true;
      $("#captcha_hint").hide();
      checkCaptcha();
    }
  });
}

window.addEventListener('message', function (e) {
  logincallback(e)
})

function logincallback(result) {
  if (result.data.result.ret == true) {
    // var visittrack_eventType = "reg";
    // var visittrack_link = $("#phoneNum").val();
    // VisitTrack.visittrack_event(
    //   visittrack_url,
    //   registUsername,
    //   visittrack_eventType,
    //   visittrack_link
    // );
    /** 登录成功  */
    if (registService.length !== 0) {
      // var url = location.origin + "/sso/success.html" + "?user=" + registUsername;
      window.location.href = registService;
    } else {
      window.location.href = location.origin + "/registsuccess.html" + "?user=" + registUsername
    }
  } else {
    /** 登录失败  */
    $("#J_ErrorMsg").html("您输入的账号和密码不匹配");
    $("#fm")[0].reset();
  }
}

(function ($) {
  var wait = 60;
  var agree = document.getElementById("checkbox");

  //自动调用函数
  $(function () {
    init();
  });

  //初始化
  function init() {
    mutualEvent();
  }

  //事件注册
  function mutualEvent() {
    $("#fm").attr("action", __ce.CASURL);

    //注册协议
    $(".text-protocol").bind("click", function () {
      $.ligerDialog.open({
        url: "registagreement.html",
        width: 800,
        height: 500,
        buttons: [{
          text: "阅读并同意",
          onclick: function (item, dialog) {
            dialog.close();
            agree.checked = true;
          }
        }],
        isResize: true,
        title: "服务协议",
        popcontent: $("#window-box")
      });
    });

    checkStrength();

    //登录
    $("#login").bind("click", function () {
      registLogin();
    });

    //老注册
    $("#oldRegist").bind("click", function () {
      switch (window.location.host) {
        case "test.300.cn":
          window.location.href =
            __ce.baseURL + "/MemberCenter/certification/toCertification";
          break;
        case "dev.300.cn":
          window.location.href = __ce.baseURL + "/certification/toCertification";
          break;
        case "pre-console.300.cn":
          window.location.href =
            "http://pre-ucenter.300.cn" + "/certification/toCertification";
          break;
        case "bjpre-console.300.cn":
          window.location.href =
            "http://bjpre-ucenter.300.cn" + "/certification/toCertification";
          break;
        case "console.300.cn":
          window.location.href =
            "http://ucenter.300.cn" + "/certification/toCertification";
          break;
        default:
          window.location.href = __ce.baseURL + "/certification/toCertification";
      }
    });

    //表单验证
    formValidate();
    $("#registForm")
      .find(".btn-submitForm")
      .unbind("click")
      .bind("click", function () {
        if ($(".btn-submitForm").hasClass("loading")) return;
        $(".btn-submitForm").loading(true);
        submitIntentForm();
      });

    //获取验证码
    $("#registForm")
      .find("#getVerify")
      .bind("click", function () {
        if (wait == 60 && sendNoteOK == true) {
          getVerification();
        }
      });

    //获取300官网字段
    if (window.location.href.indexOf("referer") !== -1) {
      registService = getUrlParam("referer");
    } else {
      registService = "";
    }

    //图片验证码
    $(".authcode img").attr(
      "src",
      __ce.baseURL +
      "/api-portal/randImg/rand?serverName=regist&" +
      fRandomBy(1000, 9999)
    );
    $(".authcode img").bind("click", function () {
      $(this).attr(
        "src",
        __ce.baseURL +
        "/api-portal/randImg/rand?serverName=regist&" +
        fRandomBy(1000, 9999)
      );
    });

    //手机号重复检查
    $(document).on("blur", "#phoneNum", function () {
      var _this = this,
        value = $(this).val(),
        requestURL = __ce.baseURL + "/api-portal/api/register/checktel";
      if (value == "" || value.length != 11) {
        return false;
      }
      $.ajax({
        url: requestURL,
        data: "data=" + JSON.stringify({
          info: {
            custTel: value
          }
        }),
        success: function (response) {
          // true：可发送验证码。false：不可发送验证码
          if (response == "true") {
            $("#phoneNum-error").remove();
            $(_this).removeClass("phoneNumError");
            $("#getVerify").removeClass("disabled");
            sendNoteOK = true;
          } else {
            $(_this).after(
              '<label id="phoneNum-error" class="error" for="phoneNum">该手机号已经注册，请直接登录</label>'
            );
            $(_this).addClass("phoneNumError");
            $("#getVerify").addClass("disabled");
            sendNoteOK = false;
          }
        },
        error: function (err) {
          console.error(err);
        }
      });
    });
  }

  function registLogin() {
    var serviceUrl;
    if (window.location.href.indexOf("service") !== -1) {
      serviceUrl = "?service=" + getUrlParam("service");
    } else {
      serviceUrl = "?service=" + getplatform();
    }

    window.location.href = __ce.CASURL + serviceUrl;
  }

  //校验密码强度
  function checkStrength() {
    var oTips = $("#tips");
    var oStrength = $(".strength");
    var aStr = ["", "弱", "中", "强", "强"];
    var aClass = [
      "",
      "strength-bar-1",
      "strength-bar-2",
      "strength-bar-3",
      "strength-bar-3"
    ];
    var i = 0;
    //文本框绑定事件
    $("#password").bind("keyup onfocus onblur", function () {
      var index = checkStrong(this.value);
      oStrength.show();
      oTips.text(aStr[index]);
      $("#strength-bar").attr("class", "strength-bar " + aClass[index]);
    });
  }

  function checkStrong(sValue) {
    var modes = 0;
    //正则表达式验证符合要求的
    if (sValue.length < 6) return modes;
    if (/\d/.test(sValue)) modes++; //数字
    if (/[a-z]/.test(sValue)) modes++; //小写
    if (/[A-Z]/.test(sValue)) modes++; //大写
    if (/\W/.test(sValue)) modes++; //特殊字符

    //逻辑处理
    switch (modes) {
      case 1:
        return 1;
        break;
      case 2:
        return 2;
      case 3:
      case 4:
        return sValue.length < 12 ? 3 : 4;
        break;
    }
  }

  //注册表单校验
  function formValidate() {
    var remoteURL = __ce.baseURL + "/api-portal/api/register/checktel";
    jQuery.validator.addMethod("isphoneNum", function (value, element) {
      var length = value.length;
      var mobile = /^1\d{10}$/;
      return this.optional(element) || (length == 11 && mobile.test(value));
    }, "请正确填写您的手机号码");
    jQuery("#registForm").validate({
      rules: {
        phoneNum: {
          required: true,
          isphoneNum: true
          // remote: {
          //   url: remoteURL,     //后台处理程序
          //   type: "get",               //数据发送方式
          //   dataType: "json",           //接受数据格式
          //   data: {                     //要传递的数据
          //     // info: function() {
          //     //   return JSON.stringify({"info":{"custTel":$("#phoneNum").val()}})
          //     // }
          //   }
          // }
        },
        password: {
          required: true,
          notBlank: true,
          rangelength: [6, 20]
        },
        rePassword: {
          required: true,
          equalTo: "#password"
        },
        verification: {
          required: true
        }
      },
      messages: {
        phoneNum: {
          required: "请输入手机账号",
          isMobile: "请输入正确的手机号码"
          // remote: "该手机号已经注册，请直接登录"
        },
        password: {
          required: "请输入密码",
          rangelength: $.validator.format("密码最小长度:{0}, 最大长度:{1}。")
        },
        rePassword: {
          required: "请确认密码",
          equalTo: "两次密码不一致，请重新输入"
        },
        verification: {
          required: "请输入验证码"
        }
      }
    });
  }

  function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = strs[i].split("=")[1];
      }
    }
    return theRequest;
  }

  //提交注册表单

  function getCookie(name) {
    var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    else return null;
  }

  function submitIntentForm(obj) {
    if (!jQuery("#registForm").valid()) {
      $(".btn-submitForm").loading(false);
      return false;
    }

    if (!agree.checked) {
      $(".btn-submitForm").loading(false);
      var failWindow = $.ligerDialog.open({
        title: "提示",
        target: $("#agree-window"),
        popcontent: $("#window-box"),
        isResize: true,
        width: 420
      });
      setTimeout(function () {
        failWindow.close();
      }, 1000);
    } else {
      var data = {
        info: {
          custPassword: $("#password").val(),
          custTel: $("#phoneNum").val(),
          smsCode: $("#verifyCode").val(),
          mkt: GetRequest().ch || getCookie("vt_origin"),
          vt_origin_url: getCookie("vt_origin_url"),
          vt_url: getCookie("vt_url"),
          source: 11
        }
      };
      try {
        var vtOrigin = getCookie('vt_origin')
        var isEDU = decodeURIComponent(window.location.href).indexOf('/edu/') !== -1
        var isMKT = vtOrigin == '300' || vtOrigin == 'guanwang'
        if (isEDU && isMKT) {
          data.info.mkt = 'mkt_edu_' + vtOrigin + '_85'
        }

      } catch (e) {

      }

      data = {
        data: JSON.stringify(data)
      };
      getAjax(login_api.registCheck, data).then(function (result) {
        $(".btn-submitForm").loading(false);
        if (result.status == "101") {
          $("#fail-window .title").text("注册成功");
          var failWindow = $.ligerDialog.open({
            title: "提示",
            target: $("#fail-window"),
            popcontent: $("#window-box"),
            isResize: true,
            width: 420
          });
          setTimeout(function () {
            failWindow.close();
          }, 2000);
          registUsername = result.data.memberCode;
          $("#J_Username").val(result.data.memberCode);
          $("#J_Password").val($("#password").val());
          var url1 = __ce.CASURL;
          var service = __ce.baseURL + "/api-portal/ssocallback.do&n=ajax";
          $.ajax({
            url: url1 + "?get-lt=true&service=" + service,
            dataType: "jsonp",
            jsonpCallback: "jsonpcallback",
            success: function (data) {
              $("#J_LoginTicket").val(data.lt);
              $("#J_Execution").val(data.execution);
              $("#fm").submit();
            },
            error: function () {
              $.message("网络访问错误!", "error");
            }
          });
        } else {
          if (!!result.msg) {
            $("#fail-window .title").text(result.msg);
          }
          var failWindow = $.ligerDialog.open({
            title: "提示",
            target: $("#fail-window"),
            popcontent: $("#window-box"),
            isResize: true,
            width: 420
          });
          setTimeout(function () {
            failWindow.close();
          }, 2000);
          resetCaptcha();
        }
      });
    }
  }

  function time(verify) {
    if (wait == 0) {
      verify.removeClass("disabled");
      verify.text("获取验证码");
      wait = 60;
    } else {
      verify.addClass("disabled");
      verify.text("重新发送(" + wait + "s)");
      wait--;
      setTimeout(function () {
        time(verify);
      }, 1000);
    }
  }

  function getVerification(obj) {
    data = {
      memberMobilePhone: $("#phoneNum").val(),
      randCode: $("#captcha").val(),
      serverName: "regist",
      source: 11
    };
    getAjax(login_api.getVerifyCode, data).then(function (result) {
      if (result.status == "101") {
        //倒计时
        time($("#getVerify"));
        $.message("手机验证码发送成功");
      } else {
        $.message(result.msg, "error");
      }
    });
  }
  // 不允许空格
  jQuery.validator.addMethod(
    "notBlank",
    function (value, element) {
      return this.optional(element) || value.indexOf(" ") == -1;
    },
    $.validator.format("请不要包含空格")
  );
  // 公司名称的校验
  jQuery.validator.addMethod(
    "verifyCompanyName",
    function (value, element) {
      var reg = new RegExp(
        "^([\u4e00-\u9fa5]|[\ufe30-\uffa0]|[A-Za-z0-9_]|[-()（）])*$"
      );
      return this.optional(element) || reg.test(value);
    },
    $.validator.format("请不要包含特殊字符")
  );
})(jQuery);

//获取url中的参数
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = window.location.search.substr(1).match(reg); //匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //返回参数值
}