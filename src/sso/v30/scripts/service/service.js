//请求接口域名，自动判断
var constant = {
  devHttps: "http://test-api-console.aiyouyi.cn",
  testHttps: "http://test-api-console.aiyouyi.cn",
  preHttps: "http://pre-api-console.300.cn",
  conHttps: "http://new-api-console.aiyouyi.cn"
};
//平台地址，自动判断
var conshttps = {
  devHttps: "http://test-omo-member.300.cn",
  testHttps: "http://test-omo-member.300.cn",
  preHttps: "http://bjpre-console.300.cn",
  bjpreHttps: "http://bjpre-console.300.cn",
  conHttps: "http://new-console.aiyouyi.cn"
};
//获取url中的参数
function geturlRequest(url) {
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var str = url.substr(url.indexOf("?") + 1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
//请求数据方法
function getAjax(api, data) {
  if (data) {
    data.tmpRandom = Math.random();
  } else {
    data = {
      tmpRandom: Math.random()
    };
  }
  //debugger;
  var deferred = $.Deferred();
  $.ajax({
    type: api.method,
    url: __ce.baseURL + api.url,
    data: data,
    //crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    },
    dataType: api.method == "GET" ? "jsonp" : "json",
    // contentType: api.contentType || "text/html;charset=UTF-8",
    success: function (result) {
      if (result.status == 999) {
        var service11111 = result.location;
        var toLocation = result.location.split("?")[0];
        var requestArr = geturlRequest(result.location);

        if (requestArr.service) {
          var service = decodeURIComponent(requestArr.service);
          service += service.indexOf("?") != -1 ? "&" : "?";
          service += "tmppp=" + Math.random() + "&";
          service += "backurl=" + encodeURIComponent(window.location.href);
          requestArr.service = encodeURIComponent(service);
        }
        var j = 0;
        for (var i in requestArr) {
          toLocation += j == 0 ? "?" : "&";
          toLocation += i + "=" + requestArr[i];
          j++;
        }
        if (requestArr.gateway) {
          $.ajax({
            type: api.method,
            url: service11111,
            dataType: api.method == "GET" ? "jsonp" : "json",
            headers: {
              "Access-Control-Allow-Origin": "*",
              Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp",
              "X-Requested-With": "XMLHttpRequest"
            },
            success: function (res) {
              deferred.resolve(res);
            }
          });
          // //var serviceUrl = environment.api + "/api-appstore/carts/cartslist?callback=66666&backurl="+encodeURIComponent(location.href);
          // console.log(service11111);
          // window.location.href = service11111;
        } else {
          window.location.href = toLocation;
        }
      } else {
        deferred.resolve(result);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.info(api.url + "ajax请求数据异常");
    }
  });
  return deferred;
}

//判断接口环境
function getDomain() {
  switch (version) {
    case "dev":
      return constant.devHttps;
    case "test":
      return constant.testHttps;
    case "pre":
      return constant.preHttps;
    case "bjpre":
      return constant.bjpreHttps;
    default:
      return constant.conHttps;
  }
}
//判断平台环境
function getplatform() {
  switch (version) {
    case "dev":
      return conshttps.testHttps;
    case "test":
      return conshttps.devHttps;
    case "pre":
      return conshttps.preHttps;
    default:
      return conshttps.conHttps;
  }
}