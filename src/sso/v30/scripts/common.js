//产品id
var emailThirdProductId = "20"; //邮箱
var domainThirdProductId = "4";  //域名
//域名年限选项
var year_option=[
    {value:12,label:"1年"},
    {value:24,label:"2年"},
    {value:36,label:"3年"},
    {value:48,label:"4年"},
    {value:60,label:"5年"},
    {value:72,label:"6年"},
    {value:84,label:"7年"},
    {value:96,label:"8年"},
    {value:108,label:"9年"},
    {value:120,label:"10年"}
]
//模板消息验证规则
var model_rule={
    //模板名称
    templateName:{required:true},
    //所有者类型
    registrantType:{required:true},
    //域名所有者（中文）：
    nameCn:{required:true,maxlength:64,chEnNum:true,haveChinese:true},
    //域名所有者（英文）：
    nameEn:{required:true,maxlength:64,enNum:true,haveEn:true},
    //域名联系人（中文）：
    custLinkmanCn:{required:true,maxlength:64,chEnNum:true,haveChinese:true},
    //域名联系人（英文）：
    xing:{required:true,maxlength:23,enNum:true,haveEn:true},
    ming:{required:true,maxlength:40,enNum:true,haveEn:true},
    //省份（英文）：
    provinceEn:{required:true,enNum:true,haveEn:true},
    //城市（英文）：
    cityEn:{required:true,enNum:true,haveEn:true},
    //通信地址（中文）：
    addressCn:{required:true,maxlength:64,chEnNum:true,haveChinese:true},
    //通信地址（英文）：
    addressEn:{required:true,maxlength:64,enNum:true,haveEn:true},
    //邮政编码：
    zipCode:{required:true,isZipCode:true},
    //手机号码：
    cellPhoneNumber:{required:true,isMobile:true},
    //电话
    quhao:{digits:true,rangelength:[3,4]},
    dianhua:{digits:true,rangelength:[7,8]},
    //电子邮箱：
    email:{required:true,email:true,maxlength:63}
}
//模板消息验证提示语
var model_message={
    //模板名称
    templateName:{required:"请输入模板名称！"},
    //所有者类型
    registrantType:{required:"请选择用户类型！"},
    //域名所有者（中文）：
    nameCn:{
        required:"请输入域名所有人（中文），企业需填写完整中文名称！",
        maxlength:"最多可输入64字符！",
        chEnNum:"只允许输入中文、英文、数字，且必须含有中文",
        haveChinese:"只允许输入中文、英文、数字，且必须含有中文"
    },
    //域名所有者（英文）：
    nameEn:{
        required:"请输入域名所有人（英文），企业需填写完整英文名称！",
        maxlength:"最多可输入64字符！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    //域名联系人（中文）：
    custLinkmanCn:{
        required:"请输入域名联系人（中文）！",
        maxlength:"最多可输入64字符！",
        chEnNum:"只允许输入中文、英文、数字，且必须含有中文",
        haveChinese:"只允许输入中文、英文、数字，且必须含有中文"
    },
    //域名联系人（英文）：
    xing:{
        required:"请输入域名联系人（英文）姓！",
        maxlength:"最多允许输入23字符！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    ming:{
        required:"请输入域名联系人（英文）名！",
        maxlength:"最多允许输入40字符！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    //省份（英文）：
    provinceEn:{
        required:"请输入省份（英文）！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    //城市（英文）：
    cityEn:{
        required:"请输入城市（英文）！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    //通信地址（中文）：
    addressCn:{
        required:"请输入通讯地址（中文）！",
        maxlength:"最多允许输入64字符！",
        chEnNum:"只允许输入中文、英文、数字，且必须含有中文",
        haveChinese:"只允许输入中文、英文、数字，且必须含有中文"
    },
    //通信地址（英文）：
    addressEn:{
        required:"请输入通讯地址（英文）！",
        maxlength:"最多允许输入64字符！",
        enNum:"只允许输入英文、数字，且必须含有英文",
        haveEn:"只允许输入英文、数字，且必须含有英文"
    },
    //邮政编码：
    zipCode:{
        required:"请输入邮编！",
        isZipCode:"邮编限6位数字！"
    },
    //手机号码：
    cellPhoneNumber:{
        required:"手机号不能为空！",
        isMobile:"请输入正确的手机号码！"
    },
    //电话
    quhao:{
        digits:"填写3-4位数字",
        rangelength:"填写3-4位数字"
    },
    dianhua:{
        digits:"填写7-8位数字",
        rangelength:"填写7-8位数字"
    },
    //电子邮箱：
    email:{
        required:"请输入电子邮件！",
        email:"请输入正确的邮件地址！",
        maxlength:"最多可输入63个字符！"
    }
}
//底部链接
var footer_menu=[
    {"label":"关于中企","url":"http://www.300.cn/aboutus/company/","target":"_blank"},
    {"label":"法律隐私","url":"http://www.300.cn/attention.html","target":"_blank"},
    {"label":"工作机会","url":"http://www.300.cn/job/","target":"_blank"},
    {"label":"联系我们","url":"http://www.300.cn/contact.html","target":"_blank"},
    // {"label":"网站地图","url":"http://www.300.cn/map.html","target":"_blank"},
    // {"label":"友情链接","url":"http://www.300.cn/link.html","target":"_blank"},
    {"label":"意见反馈","url":"http://www.300.cn/feedback.html","target":"_blank"},
    {"label":"全国网点","url":"http://www.300.cn/aboutus/org.html","target":"_blank"}
]
//版权信息
var copyright=[
    "版权所有 © 1999-2017 中企动力科技股份有限公司    Copyright © 1999-2017 300.cn All Rights Reserved",
    "<a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11030102010293' target='_blank' style='color:#999;margin-right:10px;'>京公网安备11030102010293号</a><a href='http://www.miitbeian.gov.cn/' target='_blank' style='color:#999'>京ICP证010249号</a>"
]
//官方微信号
var wxQR="http://s.300.cn/current/home/images/zqdl-wx.png";
//客服电话
var kfTel="400-660-5555";
//头部链接
var header_menu=[
    {"label":"中企动力首页","url":"http://www.300.cn/","target":""},
    {"label":"服务与支持","url":"http://www.300.cn/service/","target":""}
]
//logo链接
var logo={
    "url":"http://www.300.cn/",
    "img":"",
    "title":"中企动力网站建设",
    "target":""
}

$(function(){
    printTB();
});

//头部底部
function printTB(){
    //底部链接
    for(var i in footer_menu){$(".foot-menu").append('<span><a href="'+footer_menu[i].url+'" target="'+footer_menu[i].target+'">'+footer_menu[i].label+'</a></span>')}
    $(".foot-menu span").eq(0).addClass("first");
    $(".foot-menu span").eq(footer_menu.length-1).addClass("last");
    //版权信息
    for(var i in copyright){$(".copyright").append('<p>'+copyright[i]+'</p>')}
    //官方微信二维码
    $(".footer .ewm img").attr("src",wxQR);
    //客服电话
    $(".footer .kefu span").html(kfTel);
    //头部链接
    for(var i in header_menu){$(".header .nav").append('<span><a href="'+header_menu[i].url+'" target="'+header_menu[i].target+'">'+header_menu[i].label+'</a></span>')}
    $(".header .nav span").eq(header_menu.length-1).addClass("last");
    //logo
    $(".logo a").attr({"href":logo.url,"title":logo.title,"target":logo.target})
}

//显示登陆链接弹窗
function showLink(type){
    var linkData=[
        {"label":"会员登录","link":"http://www.300.cn/sso/login","target":'',"class1":"new_dialog_login"},
        {"label":"注册新会员","link":"http://www.300.cn/sso/reg","target":'',"class1":"new_dialog_reg"},
        {"label":"我已购买过产品","link":"http://ucenter.300.cn/certification/toCertification","target":'',"class1":"new_dialog_buy"}
    ];
    if(type==2){linkData.splice(0, 1)}
    var html="";
    html+='<div id="dialogCon"><div class="dialogBg"></div><div class="new-dialog">';
    html+='<div class="titles"><a class="closed" href="javascript:;" alt="关闭"></a></div>';
    html+='<ul class="dialog-body">';
        for(var i in linkData){
            html+='<li><a href="'+linkData[i].link+'" target="'+linkData[i].target+'"><div class="dialog-item"><span class="'+linkData[i].class1+'"></span><p>'+linkData[i].label+'</p></div></a></li>';
        }
    html+='</ul></div></div>';
    $("body").append(html);
    if(type==2){
        $("#dialogCon .new-dialog").addClass("tow-link");
    }
    $("#dialogCon li").eq(0).addClass("first");
    $("#dialogCon li").eq(linkData.length-1).addClass("end");
    $("#dialogCon .closed").click(function(){$("#dialogCon").remove()});
}




// 数组排序
function listSortBy(arr, field, order){//数组，key，模式（asc/desc）
    var refer = [], result=[], order = order=='asc'?'asc':'desc', index;
    for(i=0; i<arr.length; i++){
        refer[i] = arr[i][field]+':'+i;
    }
    refer.sort();
    if(order=='desc') refer.reverse();
    for(i=0;i<refer.length;i++){
        index = refer[i].split(':')[1];
        result[i] = arr[index];
    }
    return result;
}
//生成随机数（起止）
function fRandomBy(under, over){
   switch(arguments.length){
     case 1: return parseInt(Math.random()*under+1);
     case 2: return parseInt(Math.random()*(over-under+1) + under);
     default: return 0;
   }
}
//获取日期组（开始/结束）（2016-01-05）
function getDateArr(start,end){
    var arr=[];
    var day=(dateToMs(end)-dateToMs(start))/(3600*24*1000);
    for(var i=0; i<day; i++){
        var tmp={};
        tmp.date=msToDate(dateToMs(start)+i*3600*24*1000);
        arr.push(tmp);
    }
    return arr;
}
//获取当前日期（2016-01-03）
function getNowDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
//获取当前日期时间（2016-01-03 15:13:25）
function getNowDateTime(){
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}
//时间格式转时间戳"2016-4-18 10:45:56"
function dateToMs(date){
    var getDate = function(strDate) {return date = eval('new Date(' + strDate.replace(/\d+(?=-[^-]+$)/,function (a) { return parseInt(a, 10) - 1; }).match(/\d+/g) + ')');}
    return Ms = Date.parse(new Date(getDate(date)));//毫秒
}
//时间戳转日期时间
function msToDateTime(ms) {
    var date = new Date(parseInt(ms));
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';

    var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? ('0' + date.getHours()) :  date.getHours()) + ':';
    var m = (date.getMinutes() < 10 ? ('0' + date.getMinutes()) :  date.getMinutes()) + ':';
    var s = (date.getSeconds() < 10 ? ('0' + date.getSeconds()) :  date.getSeconds());

    var dateTime=Y+M+D+h+m+s;
    return dateTime;
}
//时间戳转日期
function msToDate(ms) {
    var date = new Date(parseInt(ms));
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate());
    var _date=Y+M+D;
    return _date;
}
//价格格式化（24.00）
function fixedPrice(price){
    var price = Math.abs(parseFloat(price));
    price = isNaN(price) ? 0 : price;
    return price.toFixed(2);
}
//获取表单json
(function(){
    $.fn.getFormData=function(data){
        //元素名
        var tag;
        //input类型
        var tp;
        //数据字段名称
        var FullName;
        //结构组名
        var NameArray;
        //前缀名
        var fstName;
        //后缀名
        var secName;
        //json结构
        var jsonData={};
        if(!$.isEmptyObject(data)){
            jsonData=data;
        }
        /*
            说明：前缀和后缀是为了组装兼容复合结构的json
            例：a#b 这样的名字产生出来的json结构如下
            {
                a:{
                    "b":""
                }
            }
        */
        $(this).find("input,select,textarea,hidden").each(function(){
            tp=$(this).attr("type");
            tag=$(this)[0].tagName;
            FullName=$(this).attr("data-input");
            if($.isEmptyObject(FullName)){
                  return true;
            }
            NameArray=FullName.split("#");
            if(NameArray.length>1){
              fstName=NameArray[0];
              secName=NameArray[1];
            }else{
              fstName="";
              secName="";
            }
            //前缀名为空则不是复合结构json
            if(tag=="INPUT"){
                if($.isEmptyObject(fstName)){
                    if(tp=="text"||tp=="hidden"||tp=="date"){
                     jsonData[FullName]=$(this).val();
                    }
                    else if(tp=="checkbox" && $(this).prop("checked")){
                      jsonData[FullName]=$(this).val();
                    }
                    else if(tp=="radio" && $(this).prop("checked")){
                      jsonData[FullName]=$(this).val();
                    }
                    else if($.isEmptyObject(jsonData[FullName])){
                      jsonData[FullName]="";
                    }
                }
                else{

                    if($.isEmptyObject(jsonData[fstName])){
                          jsonData[fstName]={};
                    }
                    if(tp=="text"||tp=="hidden"||tp=="date"){
                      jsonData[fstName][secName]=$(this).val();
                    }
                    else if(tp=="checkbox" && $(this).prop("checked")){
                      jsonData[fstName][secName]=$(this).val();
                    }
                    else if(tp=="radio" && $(this).prop("checked")){
                      jsonData[fstName][secName]=$(this).val();
                    }
                    else if($.isEmptyObject(jsonData[fstName][secName])){
                      jsonData[fstName][secName]="";
                    }
                }
            }else if(tag=="SELECT" || tag=="TEXTAREA"){
                if($.isEmptyObject(fstName)){
                    jsonData[FullName]=$(this).val();
                }
                else{
                    if($.isEmptyObject(jsonData[fstName])){
                        jsonData[fstName]={};
                    }
                    jsonData[fstName][secName]=$(this).val();
                }
            }
        })
        return jsonData;
    }
})(jQuery);
//填充表单json
(function(){
    $.fn.FillFormData=function(jsonData){
        //元素名
        var tag;
        //input类型
        var tp;
        //数据字段名称
        var FullName;
        //结构组名
        var NameArray;
        //前缀名
        var fstName;
        //后缀名
        var secName;
        //json结构
        /*
            说明：前缀和后缀是为了组装兼容复合结构的json
            例：a#b 这样的名字产生出来的json结构如下
            {
                a:{
                    "b":""
                }
            }
        */
        $(this).find("input,select,textarea").each(function(){
              tp=$(this).attr("type");
              tag=$(this)[0].tagName;
              FullName=$(this).attr("data-input");
              if($.isEmptyObject(FullName)){
                    return true;
              }
              NameArray=FullName.split("#");
              if(NameArray.length>1){
                fstName=NameArray[0];
                secName=NameArray[1];
              }
              //前缀名为空则不是复合结构json
            if(tag=="INPUT"|| tag=="SELECT"){
                if($.isEmptyObject(fstName)){
                    if(tp=="text"||tp=="date"||tp=="hidden"){
                        $(this).val(jsonData[FullName]);
                    }else if(tp=="radio" && jsonData[FullName]==$(this).val()){
                        $(this).attr("checked",true);
                    }else if(tp=="checkbox"){
                        if($(this).val()==jsonData[FullName]){
                            $(this).attr("checked",true);
                        }else{
                            $(this).attr("checked",false);
                        }
                    }else if(tag=="SELECT"){
                        $(this).val(jsonData[FullName]);
                    }
                }else{
                    if(tp=="text"||tp=="date"||tp=="hidden"){
                        $(this).val(jsonData[fstName][secName]);
                    }else if(tp=="radio" && jsonData[fstName][secName]==$(this).val()){
                        $(this).attr("checked",true);
                    }else if(tp=="checkbox"){
                        if($(this).val()==jsonData[fstName][secName]){
                            $(this).attr("checked",true);
                        }else{
                            $(this).attr("checked",false);
                        }
                    }else if(tag=="SELECT" ){
                        $(this).val(jsonData[fstName][secName]);
                    }
                }
            }
            if(tag=="TEXTAREA"){
                if($.isEmptyObject(fstName)){
                    $(this).val(jsonData[FullName]);
                }else{
                    $(this).val(jsonData[fstName][secName]);
                }
            }
        })
    }
})(jQuery);
//清空表单
(function($){
    $.fn.clearFromValue = function() {
        $(this).find("input").val('');
        $(this).find("select").val('');
    }
})(jQuery);
//弹窗提示
(function($){
    $.extend({
        message:function(msg,type,t){//消息，类型，持续时间
            var time,
                html='<div class="message-pop opacity"><i class="icon"></i><p class="text"></p></div>';
            $("body").append(html);
            var mcon=$(".message-pop");
            if(type){mcon.addClass(type)}
            mcon.find(".text").text(msg);
            var wid=mcon.outerWidth();
            mcon.css({"margin-left":-(wid/2)})
            if(t){
                time = t;
            }else{
                time = 2000
            }
            var st=setTimeout(function(){
                $(".message-pop").fadeOut(300);
            },time);
            var rm=setTimeout(function(){
                $(".message-pop").remove();
            },time+300);
        }
    });
})(jQuery);
//带按钮的弹窗提示
(function($){
    $.extend({
        dialog:function(options){
            var opts = {
                title: '提示',  //标题
                msg: '',   //信息
                //type: 'warn',   //类型，默认为warn，暂未配置其他类型
                btn: [{text:'确定', type:'sure'}]  //按钮，可配置多个，参数如下：{ text: String,
                                                    //                             type: 'sure'或'normal',
                                                    //                             callback: fn  (回调函数，默认为关闭弹窗)
            }
            opts = $.extend(opts, options);
            var html = '<div class="dialog-pop"><i class="close"></i><i class="icon"></i><div class="dialog-content"><p class="title"></p><p class="text"></p></div><div class="btn-area"></div></div>';
            $("body").append($('<div class="mask"></div>'));
            $("body").append(html);
            var mcon = $(".dialog-pop");
            //mcon.addClass(opts.type);
            mcon.find(".title").text(opts.title);
            mcon.find(".text").text(opts.msg);

            for (var i=0; i<opts.btn.length; i++) {
                var oBtn = $('<div class="btn '+opts.btn[i].type+'">'+opts.btn[i].text+'</div>');

                if (opts.btn[i].callback && typeof(opts.btn[i].callback) === 'function') {
                    oBtn.bind("click", opts.btn[i].callback);
                } else {
                    oBtn.bind("click", close);
                }

                mcon.find(".btn-area").append(oBtn);
            }

            mcon.find(".close").bind("click", close);
            $(".mask").bind("click", close);
            var wid = mcon.outerWidth();
            var hei = mcon.outerHeight();
            mcon.css("margin-left", -wid/2);
            mcon.css("margin-top", -hei/2);

            function close() {
                $(".mask").remove();
                $(".dialog-pop").remove();
            }

        }
    });
})(jQuery);
//按钮loading效果
(function ($) {
    $.fn.loading = function (options) {
        return this.each(function () {
            var $this = $(this);
            switch (options) {
                case true:
                    $this.addClass("loading");
                    break;
                case false:
                    $this.removeClass("loading");
                    break;
            }
        });
    };
})(jQuery);

//获取url中的参数
function getRequest(name){
    var url = location.href; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(url.indexOf("?")+1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest[name];
}

//价格有效位数处理
function numToFix(value) {
    if (!value && value != 0) return '';
    value = parseFloat(value);
    return (Math.round(value * 100) / 100).toFixed(2);
}

