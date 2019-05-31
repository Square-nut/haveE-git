/*
 * ZQDL执行脚本
 * author:gaoshiyong<gaoshiyong1272@vip.163.com>
 * jQuery版本必须在1.42以上
 */

/**
 * [description] 语言包内容
 * @return {[type]} [description]
 */
var LANG = window.LANG || {};



//中文简体
LANG.cn = window.LANG.cn || {};
LANG.cn['loading']                             		= '加载中';
LANG.cn['load_tips']                             	= '加载中，请稍后…';
LANG.cn['inter_url']                             	= '请输入请求地址！';
LANG.cn['char']                             		= '字符';
LANG.cn['back_to_top']                           	= '返回顶部';
LANG.cn['you_can_inter_char']                       = '您可以输入@=@char@=@个字';
LANG.cn['your_input_has_exceeded']                  = '您的输入已经超过了@=@char@=@字';
LANG.cn['upload_image_type_error']                  = '上传文件格式有误，请重新上传！';
LANG.cn['upload_image_time_out']                  	= '上传文件超时，请重试！';


function OASGetLangVal(key){
	return LANG.cn[key];
}

/**
 * [description] 加载JOSN组件(JSON.stringify(JSON),JSON.parse(str))
 * @return {[type]} [description]
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3(5 p!==\'w\'){p={}}(6(){\'1y 1z\';6 f(n){7 n<10?\'0\'+n:n}3(5 11.m.q!==\'6\'){11.m.q=6(){7 1e(o.W())?o.1L()+\'-\'+f(o.1I()+1)+\'-\'+f(o.1H())+\'T\'+f(o.1q())+\':\'+f(o.1D())+\':\'+f(o.1C())+\'Z\':x};J.m.q=1B.m.q=1A.m.q=6(){7 o.W()}}y e,A,8,C,N,l;6 L(b){A.1h=0;7 A.M(b)?\'"\'+b.G(A,6(a){y c=N[a];7 5 c===\'H\'?c:\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})+\'"\':\'"\'+b+\'"\'}6 z(a,b){y i,k,v,h,B=8,9,2=b[a];3(2&&5 2===\'w\'&&5 2.q===\'6\'){2=2.q(a)}3(5 l===\'6\'){2=l.I(b,a,2)}1x(5 2){E\'H\':7 L(2);E\'P\':7 1e(2)?J(2):\'x\';E\'1w\':E\'x\':7 J(2);E\'w\':3(!2){7\'x\'}8+=C;9=[];3(Q.m.O.1v(2)===\'[w 1u]\'){h=2.h;D(i=0;i<h;i+=1){9[i]=z(i,2)||\'x\'}v=9.h===0?\'[]\':8?\'[\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\']\':\'[\'+9.K(\',\')+\']\';8=B;7 v}3(l&&5 l===\'w\'){h=l.h;D(i=0;i<h;i+=1){3(5 l[i]===\'H\'){k=l[i];v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}U{D(k 1f 2){3(Q.m.1g.I(2,k)){v=z(k,2);3(v){9.1d(L(k)+(8?\': \':\':\')+v)}}}}v=9.h===0?\'{}\':8?\'{\\n\'+8+9.K(\',\\n\'+8)+\'\\n\'+B+\'}\':\'{\'+9.K(\',\')+\'}\';8=B;7 v}}3(5 p.V!==\'6\'){A=/[\\\\\\"\\1t-\\1s\\1F-\\1r\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;N={\'\\b\':\'\\\\b\',\'\\t\':\'\\\\t\',\'\\n\':\'\\\\n\',\'\\f\':\'\\\\f\',\'\\r\':\'\\\\r\',\'"\':\'\\\\"\',\'\\\\\':\'\\\\\\\\\'};p.V=6(a,b,c){y i;8=\'\';C=\'\';3(5 c===\'P\'){D(i=0;i<c;i+=1){C+=\' \'}}U 3(5 c===\'H\'){C=c}l=b;3(b&&5 b!==\'6\'&&(5 b!==\'w\'||5 b.h!==\'P\')){14 13 1E(\'p.V\');}7 z(\'\',{\'\':a})}}3(5 p.R!==\'6\'){e=/[\\1G\\1m\\1n-\\1o\\1p\\1l\\1k\\1j-\\1i\\1b-\\1a\\19-\\15\\Y\\X-\\12]/g;p.R=6(c,d){y j;6 S(a,b){y k,v,2=a[b];3(2&&5 2===\'w\'){D(k 1f 2){3(Q.m.1g.I(2,k)){v=S(2,k);3(v!==1J){2[k]=v}U{1K 2[k]}}}}7 d.I(a,b,2)}c=J(c);e.1h=0;3(e.M(c)){c=c.G(e,6(a){7\'\\\\u\'+(\'17\'+a.18(0).O(16)).1c(-4)})}3(/^[\\],:{}\\s]*$/.M(c.G(/\\\\(?:["\\\\\\/1M]|u[0-1N-1O-F]{4})/g,\'@\').G(/"[^"\\\\\\n\\r]*"|1P|1Q|x|-?\\d+(?:\\.\\d*)?(?:[1R][+\\-]?\\d+)?/g,\']\').G(/(?:^|:|,)(?:\\s*\\[)+/g,\'\'))){j=1S(\'(\'+c+\')\');7 5 d===\'6\'?S({\'\':j},\'\'):j}14 13 1T(\'p.R\');}}}());',62,118,'||value|if||typeof|function|return|gap|partial||||||||length||||rep|prototype||this|JSON|toJSON||||||object|null|var|str|escapable|mind|indent|for|case||replace|string|call|String|join|quote|test|meta|toString|number|Object|parse|walk||else|stringify|valueOf|ufff0|ufeff|||Date|uffff|new|throw|u206f||0000|charCodeAt|u2060|u202f|u2028|slice|push|isFinite|in|hasOwnProperty|lastIndex|u200f|u200c|u17b5|u17b4|u00ad|u0600|u0604|u070f|getUTCHours|x9f|x1f|x00|Array|apply|boolean|switch|use|strict|Boolean|Number|getUTCSeconds|getUTCMinutes|Error|x7f|u0000|getUTCDate|getUTCMonth|undefined|delete|getUTCFullYear|bfnrt|9a|fA|true|false|eE|eval|SyntaxError'.split('|'),0,{}));


//创建组件
var ZQDL = window.ZQDL || {};

/**
 * [log 输出日志,支持原生console和alert输出日志]
 * @return
 */
ZQDL.LOG = ZQDL.log = function() {
    if (typeof(console) == "object" && typeof(console.log) == "function") console.log.apply(console, arguments);
};





/**
 * [ZQDL.namespace 创建局部命名空间]
 * @param  {[sting]} ns [传入命名空间字符串]
 * @return {[object]}   [返回命名空间对象]
 */
ZQDL.namespace = function(ns) {
    if (!ns || !ns.length) return null;
    var levels = ns.split(".");
    var nsobj = ZQDL;
    for (var i=(levels[0] == "ZQDL") ? 1 : 0; i<levels.length; ++i) {
        nsobj[levels[i]] = nsobj[levels[i]] || {};
        nsobj = nsobj[levels[i]];
    }
    return nsobj;
};

/**
 * 创建工具类对象
 */
ZQDL.namespace('ZQDL.util');

/**
 * 获得当前url域名
 * @param url : 需要解析的url
 */
ZQDL.util.domain = {
    // 获得当前域名
    domain: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        if('https:' == location.protocol)durl = /https:\/\/([^\/]+)\//i;       	
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        hosts = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1];
        return hosts;
    },
    // 域名前缀
    domain_pre: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        if('https:' == location.protocol)durl = /https:\/\/([^\/]+)\//i;       	
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr[0];
    },
    //将当前域名解析成数组
    domain_arr: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        if('https:' == location.protocol)durl = /https:\/\/([^\/]+)\//i;       	
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr;
    },
    currentUrl: window.location.href
};
/**
 * [getUrlParam description] 获取url地址或者指定字符串中参数,只获取链接地址中的第一次出现的key的值作为返回值
 * @param  {[string]} key  [description] 键值名称
 * @param  {[string]} stri [description]
 * @return {[type]}      [description]
 */
ZQDL.util.getUrlParam = function(key,str){
    var val = null;
    var tempStr = str == undefined ? window.location.search.substring(1) : str.split('?')[1];
    if(tempStr.length != 0){
        var arr = tempStr.split('&');
        var len = arr.length;
        for(i=0 ; i < len ; i++){
            if(arr[i].split('=')[0] == key){
                val = arr[i].split('=')[1];
                break;
            }
        }
    }
    return val;
};

//cnzz统计后加载
ZQDL.util.cnzzopen = true;		// 是否开启cnzz统计
ZQDL.util.cnzz = function(){
	if(!ZQDL.util.cnzzopen)return false;		//
	var cnzzobj = $('#cnzz_stat_icon_'+ ZQDL.util.path['analytics']['cnzz']);
	if(0 == cnzzobj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "s4.cnzz.com/z_stat.php?id=" + ZQDL.util.path['analytics']['cnzz'];
    cnzzobj.append(cnzz);
};

//qq后加载
ZQDL.util.qqwpa = function(){
	var obj = $('body');
	if(0 == obj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "wpa.b.qq.com/cgi/wpa.php?key=" + ZQDL.util.path['analytics']['qq'];
    //obj.append(cnzz);
};
//qq后加载
ZQDL.util.baiduhm = function(){
	var obj = $('body');
	if(0 == obj.length ) return ;
	var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    var cnzz = document.createElement("script");
    cnzz.src = cnzz_protocol + "hm.baidu.com/h.js%3F5" + ZQDL.util.path['analytics']['baidu'];
    obj.append(cnzz);
};
ZQDL.util.BizQQWPA = function(obj){
	try{
    	//BizQQWPA.addCustom({aty: '0', a: '1002', nameAccount: 800144700, selector: obj});
    }catch(e){
    	ZQDL.LOG('无法加载QQ插件');
    }
};

//从浏览器中启用调试模式
if(ZQDL.util.getUrlParam('debug') == 1){
    ZQDL.config.set('debug',true);
}


//关闭debug模式
if(ZQDL.util.getUrlParam('closeecho') == 1){
    ZQDL.config.set('debug',false);
}


/**
 * [ZQDL.util.ajax description] 异步请求地址,假如是不同地址会强制跨域
 * @param options.url(String)  请求连接地址必选是完整的链接地址 （必选）
 * @param options.type (String) 请求类型 默认 - post
 * @param options.data(String)  请求参数 （可选）
 * @param options.textType (String)  返回数据类型 默认是json 支持格式为jQuery模式
 * @param options.success (function)  请求成功处理方法 （可选）
 * @param options.error (function)  请求失败处理方法（可选）
 * @return {[type]} [description]
 */
ZQDL.util.ajax = function(options){

    if(!options.url) {
        alert(OASGetLangVal('inter_url'));
        return;
    }

    //设置默认参数
    var definOpt = {
        url : null,
        type : 'post',
        dataType : 'json',
        data : {},
        success : null,
        error : null,
        timeout : 120000,
        cache : false
    };

    //合并参数
    var opt = $.extend({},definOpt,options);

    //设置请求方式
    opt.type = opt.type == 'get' ? 'GET' : 'POST';

    //判断是否为同域
    var host = location.protocol + '//' + location.hostname;
    if(opt.url.indexOf(location.protocol) != -1){
    	var crossdomain = opt.url.substr(0, host.length) == host ? false : true;
    }else{
    	var crossdomain = false;
    }

    if(crossdomain) {
        if(opt.data.jsonpCallback) opt.jsonpCallback = opt.data.jsonpCallback;
        opt.type = 'GET';
        opt.dataType = "jsonp";
        opt.jsonp = "callback";
    }
    $.ajax(opt);
};

/**
 * [showBrowser description] 查看浏览器相关信息
 * @return {[type]} [description]
 */
ZQDL.util.browser = function(){
    if(ZQDL.util.getUrlParam('liulanqi')) {
        var maxNum = ZQDL.util.getUrlParam('num') ? parseInt(ZQDL.util.getUrlParam('num')) : 30;
        var i = 0,str = '';
        for(key in window.navigator){
            str += key +"==>" + window.navigator[key] + "\n";
            if(i > maxNum) break;
            i++;
        }
        alert(str);
    };
};
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
ZQDL.util.holiday = function(options){	
	var data = {time:new Date().getTime()};
	var domain = ZQDL.util.domain.domain_arr(ZQDL.util.domain.currentUrl);
	var url = location.protocol + '//'+ ZQDL.util.path['300cn'] + 'www.' + domain[1] + '.' + domain[2];
    if(domain[1] != '300'){
    	url = location.protocol + '//www.bpis.com.cn';
    }
    var definOpt = {
        url:url+ '/holiday?is_ajax=1',
        crossDomain:true,
        type:'post',
        dataType:'jsonp',
        data:data,
        success : null,
        error:function(xhr, textStatus, errorThrow){
        	ZQDL.LOG(errorThrow.message);
        }
    };
    var opt = $.extend({},definOpt,options);
    $.ajax(opt);       	
};
/**
 * 生成uuid
 * alert(ZQDL.util.uuid.get());
 */
ZQDL.util.uuid = {
	guid : function(g) {	
		var arr = new Array(); //存放32位数值的数组
	    if (typeof (g) == "string") { //如果构造函数的参数为字符串
	        InitByString(arr, g);
	    }
	    else {
	        InitByOther(arr);
	    };
	    //返回一个值，该值指示 Guid 的两个实例是否表示同一个值。
	    this.Equals = function (o) {
	        if (o && o.IsGuid) {
	            return this.ToString() == o.ToString();
	        }
	        else {
	            return false;
	        }
	    };
	    //Guid对象的标记
	    this.IsGuid = function () { };
	    //返回 Guid 类的此实例值的 String 表示形式。
	    this.ToString = function (format) {
	        if (typeof (format) == "string") {
	            if (format == "N" || format == "D" || format == "B" || format == "P") {
	                return ToStringWithFormat(arr, format);
	            }
	            else {
	                return ToStringWithFormat(arr, "D");
	            }
	        }
	        else {
	            return ToStringWithFormat(arr, "D");
	        }
	    };
	    //由字符串加载
	    function InitByString(arr, g) {
	        g = g.replace(/\{|\(|\)|\}|-/g, "");
	        g = g.toLowerCase();
	        if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1) {
	            InitByOther(arr);
	        }
	        else {
	            for (var i = 0; i < g.length; i++) {
	                arr.push(g.substring(i, i + 1));
	            }
	        }
	    };
	    //由其他类型加载
	    function InitByOther(arr) {
	        var i = 32;
	        while (i--) {
	            arr.push("0");
	        }
	    };
	    /*
	    	根据所提供的格式说明符，返回此 Guid 实例值的 String 表示形式。
	    	N  32 位： xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
	    	D  由连字符分隔的 32 位数字 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
	    	B  括在大括号中、由连字符分隔的 32 位数字：{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}
	    	P  括在圆括号中、由连字符分隔的 32 位数字：(xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
	    */
	    function ToStringWithFormat(arr, format) {
	        switch (format) {
	            case "N":
	                return arr.toString().replace(/,/g, "");
	            case "D":
	                var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20, 32);
	                str = str.replace(/,/g, "");
	                return str;
	            case "B":
	                var str = ToStringWithFormat(arr, "D");
	                str = "{" + str + "}";
	                return str;
	            case "P":
	                var str = ToStringWithFormat(arr, "D");
	                str = "(" + str + ")";
	                return str;
	            default:
	                return new ZQDL.util.uuid.guid();
	        }
	    }	
	},
	//初始化 Guid 类的一个新实例。
	get : function(){
		//Guid 类的默认实例，其值保证均为零。
		ZQDL.util.uuid.guid.Empty = new ZQDL.util.uuid.guid();
		var g = "";
		var i = 32;
		while(i--){
			g += Math.floor(Math.random()*16.0).toString(16);
		}
		uObject = new ZQDL.util.uuid.guid(g);
		return uObject.ToString('-');
	}
};




//alert(createUuid()););
ZQDL.util.verify = function(obj){	
	var $this = $(obj);
    var inputname = $this.attr('name');
    var objVerifyImg = $this.parents('form').find('.verify_image');
    var tim = new Date().getTime();
    if(inputname =='verify'){
        if(objVerifyImg.attr('data-act') != '1'){
            objVerifyImg.attr('src','/verify/verify?'+tim);
        }
    }else{
        objVerifyImg.attr('src','/verify/verify?'+tim);
    }

	var objVerify = $('.verify_image');
	for(var i=0;i<objVerify.length;i++){
		var obj = $(objVerify[i]);
		obj.attr('data-act',0);
	}
	objVerifyImg.attr('data-act',1);
};
/**
 * 创建cookie对象
 */
ZQDL.namespace('ZQDL.cookie');

/**
 * [get description] 读取cookie值
 * @param  {[string]} key     [description] cookie键值名称
 * @param  {[object]} options [description] cookie可选对象
 * @return {[string]}         [description] 返回cookie键值所对应的的值，没有值返回null
 */
ZQDL.cookie.get = function (key, options) {
    options = options || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

/**
 * [remove description] 删除指定键值所对应的cookie值
 * @param  {[type]} key     [description]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
ZQDL.cookie.remove = function (key,options) {
    ZQDL.cookie.set(key, null , options ? options : {});
};


/**
 * [set description] 添加指定名称cookie值 , 过期时间小时制
 * @param {[type]} key   [description]
 * @param {[type]} value [description]
 * @param {[type]} opt   [description] cookie相关属性，
 */
ZQDL.cookie.set = function (key, value, options) {
    options = $.extend({},{
        domain : '',
        path : '/'
    }, options);

    //删除cookie操作处理
    if (value === null) {
        options.expires = -1;
    }

    //设置过期时间
    if (typeof options.expires === 'number') {
        var seconds = options.expires, t = options.expires = new Date();
        t.setTime(t.getTime() + seconds*1000);
    }

    //强制转换为字符串格式
    value = '' + value;

    //设置cookie信息
    return (document.cookie = [
        encodeURIComponent(key), '=',
        options.raw ? value : encodeURIComponent(value),
        options.expires ? '; expires=' + options.expires.toUTCString() : '',
        options.path ? '; path=' + options.path : '',
        options.domain ? '; domain=' + options.domain : '',
        options.secure ? '; secure' : ''
    ].join(''));
};

// 创建应用
ZQDL.namespace('ZQDL.apps');
ZQDL.apps.sso = {
    init : function(){
        var logins = $('.home_login');
        var uri = '';
        var $obj = null;
        if (logins.length > 0) {
            for(j = 0; j < logins.length; j++) {
                $obj = $(logins[j]);
                uri = $obj.attr('href');
                uri += (uri.indexOf("?") == '-1') ?  "?" : '&';
                uri += 'referer=' + encodeURIComponent(window.location.href);
                $obj.attr({href : uri} );
            }
        }
        logins = $('.home_out');
        if (logins.length > 0) {
            for(j = 0; j < logins.length; j++) {
                $obj = $(logins[j]);
                uri = $obj.attr('href');
                uri += (uri.indexOf("?") == '-1') ?  "?" : '&';
                uri += 'referer=' + encodeURIComponent(window.location.href);
                $obj.attr({href : uri} );
            }
        }
        logins = $('.home_reg');
        if (logins.length > 0) {
            for(j = 0; j < logins.length; j++) {
                $obj = $(logins[j]);
                uri = $obj.attr('href');
                uri += (uri.indexOf("?") == '-1') ?  "?" : '&';
                uri += 'referer=' + encodeURIComponent(window.location.href);
                $obj.attr({href : uri} );
            }
        }

    },
    loginNum : 0,
    getMemberId:function(){
        // 返回用户名
        var uid = ZQDL.cookie.get('300cn_user');
        if(uid == null ) uid = '';
        return uid;
        // 返回用户custId
        //return ZQDL.cookie.get('300cn_custId');
    },
    login : function(){
        ZQDL.apps.sso.loginNum ++ ;
        var domain = ZQDL.util.domain.domain_arr(ZQDL.util.domain.currentUrl);
        var post = {'is_ajax':1,referer:window.location.href};
        var url = location.protocol + '//'+ ZQDL.util.path['300cn'] + 'm.' + domain[1] + '.' + domain[2];
        if(domain[1] != '300'){
            url = location.protocol + '//www.bpis.com.cn';
        }

        //取回余额 + 判断登录
        $.ajax({
            url:url+ '/sso/login',
            crossDomain:true,
            type:'post',
            dataType:'jsonp',
            data:post,
            success : function(info){
                if(info.status == '1'){

                    var userTmp = info.info;
                    //$("#home_login").hide();		//旧会员中心
                    $("#home_reg").hide();

                    //$("#userinfo").html(userTmp).show(); 旧会员中心
                    //$("#userinfo").html(userTmp).show().attr({href:href});			// 新会员中心
                    //$(".home_out_line").show();
                    $("#home_out").show();

                    var userTmp = info.info;
                    data = {memberCode:userTmp}
                    //uri = ZQDL.util.path.consoleApi + '/api-portal/operInstance/getInstanceNum?callback=?';
                    uri = url+'/sso/mmember&callback=?';
                    $.ajax({
                        url:uri,
                        crossDomain:true,
                        type:'post',
                        dataType:'jsonp',
                        data:data,
                        success : function(result){
                            if(result.status == '1'){
                                var href = 'http:' + result.info;
                                if(!href){
                                    href = ZQDL.util.path.console;
                                }
                                $("#home_login").hide();
                                $("#home_reg").hide();
                                $("#member").show();
                                $('.member_center').html('会员中心').attr({href:href});
                                $("#userinfo").html(userTmp).show().attr({href:href});
                                $("#home_out").show();
                            }

                        },
                        error:function(){
                            console.log('error');
                        }

                    });
                }else{
                    $(".home_out_line").hide();
                    $("#home_out").hide();
                    $("#userinfo").hide();
                    $("#member").hide();
                    $("#home_login").show();
                    $("#home_reg").show();
                }
            },
            error:function(xhr, textStatus, errorThrow){
                if(!errorThrow){
                    ZQDL.LOG(xhr.message);
                }else{
                    ZQDL.LOG('登录有误，未获取到error');
                }
                if(ZQDL.apps.sso.loginNum < 2 )ZQDL.apps.sso.login()
            }
        });
    }
};
ZQDL.apps.visitSessionId = '';
ZQDL.apps.vistCount = {	
	origin : '',
	originUrl : '',							// 来源URL
	landUrl : '',								// 落地url
	channel : '',															// 渠道
	promoteSlug	: '',
	countUrl:'',
	event : {form : 'form',bd_zixun : 'zixun-baidu',qq_zixun:'zixun-qq',reg:'reg',baidu_call:'baidu_call'},	
	init : function(){		
		ZQDL.apps.vistCount.origin = ZQDL.cookie.get('vt_origin') ? ZQDL.cookie.get('vt_origin') : '';
		ZQDL.apps.vistCount.originUrl = ZQDL.cookie.get('vt_origin_url');
		ZQDL.apps.vistCount.landUrl = ZQDL.cookie.get('vt_url');
	},	
	//  表单提交统计
	formSubmit : function(obj){		
		var form = $(obj).parents('form');
		var mobile = form.find("input[name=mobile]").val();			
		var logId = form.find("input[name=log_id]").val();	
		
		var eventType = form.find("input[name=eventType]").val();
		if(eventType == '' || typeof(eventType) == 'undefined')eventType = ZQDL.apps.vistCount.event.form;
		
		
		try{
			VisitTrack.visittrack_event(ZQDL.apps.vistCount.countUrl,ZQDL.apps.sso.getMemberId(),ZQDL.apps.vistCount.event.form,mobile,logId,'finished');
		}catch(e){
			ZQDL.LOG('表单提交统计失败：统计文件未加载');
		}
	},
	zixunClick : function(obj){
		var zixunType = $(obj).attr('zixun');
		var event = ZQDL.apps.vistCount.event.bd_zixun;
		if(zixunType == 'qq')event = ZQDL.apps.vistCount.event.qq_zixun;
		try{
			VisitTrack.visittrack_event(ZQDL.apps.vistCount.countUrl,ZQDL.apps.sso.getMemberId(),event,'',ZQDL.util.uuid.get(),'finished');
		}catch(e){
			ZQDL.LOG('咨询统计失败：统计文件未加载');
		}

	},
	// 生成埋点数据日志
	visitCount : function(obj){
		var val = (typeof($(obj).attr('tongji_type')) == 'undefined') ? $(obj).attr('value') : $(obj).attr('tongji_type');
		var act = ($(obj).attr('count_type') == '' || typeof($(obj).attr('count_type')) == 'undefined') ? 'finished' : $(obj).attr('count_type');		
		try{
			VisitTrack.visittrack_event(ZQDL.apps.vistCount.countUrl,ZQDL.apps.sso.getMemberId(),val,'',ZQDL.util.uuid.get(),act);
			return false;
		}catch(e){
			ZQDL.LOG('生成埋点数据日志失败');
		}
		
	},
	baiduCallClick : function(obj){
        var parentObj = $(obj).parents('div.callback');
        var mobileObj = parentObj.find("input[name=mobile]");
		var mobile = mobileObj.val();
		if(!ZQDL.apps.validate.mobile(mobile) && !ZQDL.apps.validate.phone(mobile)) {
			ZQDL.apps.oTools.alertmess('手机号为空或手机格式不正确');
			return false;
		}
		var event = ZQDL.apps.vistCount.event.baidu_call;
		try{
			lxb.call(mobile);
			VisitTrack.visittrack_event(ZQDL.apps.vistCount.countUrl,ZQDL.apps.sso.getMemberId(),event,mobile,ZQDL.util.uuid.get(),'finished');
		}catch(e){
			ZQDL.LOG('咨询统计失败：统计文件未加载');
		}	
		return false;
	},
	reg:function(){},
	initChannel : function (){
		var origin = ZQDL.apps.vistCount.origin;		
		ZQDL.apps.vistCount.channel = '';
		if(origin == ''){			
			return ;
		}
		if(null != origin){
			var strs= new Array(); //定义一数组 
			strs = origin.split("_"); //字符分割 
			if(strs.length < 3) return ;
			ZQDL.apps.vistCount.channel = strs[2];
			ZQDL.apps.vistCount.promoteSlug = strs[1];
		}
	},
	initForm : function(){		
		var formObj = $('.log_id');
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.util.uuid.get());
		}
		formObj = $('.promoteSlug');
		ZQDL.apps.vistCount.initChannel();
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.apps.vistCount.promoteSlug);
		}
		formObj = $('.channelSlug');
		ZQDL.apps.vistCount.initChannel();
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.apps.vistCount.channel);
		}
		formObj = $('.formSlug');
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.apps.vistCount.origin);
		}		
		formObj = $('.landUrl');
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.apps.vistCount.landUrl);
		}
		formObj = $('.sourceUrl');
		for(var i=0;i<formObj.length;i++){
			var log = $(formObj[i]);
			log.val(ZQDL.apps.vistCount.originUrl);
		}
		
	}
};


// 手机加座机验证
ZQDL.apps.validate =  {
	mobile : function(str){
		var mobile = /^0?(13|15|17|18|14)[0-9]{9}$/;
		return mobile.test(str);
	},
	phone : function(str){
		var phone = /^0\d{2,3}\d{7,8}$/;
		return phone.test(str);
	}
};
ZQDL.apps.toolbar = {
	init : function(){
		var domain = ZQDL.util.domain.domain_arr(ZQDL.util.domain.currentUrl);
		var post = {'is_ajax':1};
        var url = location.protocol + '//'+ ZQDL.util.path['300cn'] + 'www.' + domain[1] + '.' + domain[2];
        
		
        $.ajax({
            url:url+ '/index/imnotice',
            crossDomain:true,
            type:'post',
            dataType:'jsonp',
            data:post,
            success : function(data){
                var obj = $("#noticebar");
                var urls = $("#imnotice");
            	if(data.imnotice.status){
                	urls.attr({href : data.imnotice.url});
                    obj.show();// 把返回的数据添加到页面上
                }else{
                    obj.hide();// 把返回的数据添加到页面上
                }
                if(data.active.status){
                	var html = '<a href="'+ data.active.url +'">'+ data.active.title +'</a>';
                	$("#topActive").html(html);
                }           
            },
            error:function(xhr, textStatus, errorThrow){
            	ZQDL.LOG(errorThrow.message);
            }
        });
    },		
};
ZQDL.apps.oTools = {
	alertmess : function(str){
		var html = '<div class="mess">' + str + '</div>',
	    fullW = $(window).width(),
	    fullH = $(window).height(),
	    twidth = 320 || parseInt(fullW * 0.8);

		if($('.mess').size() < 1){
		    $('body').append(html);
		
		    $('.mess').css({
		        'width' : twidth,
		        'min-height': '30px',
		        'line-height' : '30px',
		        'font-size': '16px',
		        'marginLeft' : parseInt(-twidth/2-10),
		        'background' : '#000',
		        'color' : '#fff',
		        'z-index' : 99999,
		        'position' : 'fixed',
		        'left' : '50%',
		        'top' : '40%',
		        'border-radius' : '5px',
		        'text-align' : 'center',
		        'padding' : '5px 10px'
		    }).fadeIn();
		
		    setTimeout(function(){
		        $('.mess').fadeOut(function(){
		            $('.mess').remove();
		        });
		    }, 2000);
		}
	},
	contactToggle : function(obj){
		var t=$(obj);if(t.hasClass("off")){t.addClass("on").removeClass("off");$("html,body").find(".toggle").animate({"bottom":"-180px"})}else{t.addClass("off").removeClass("on");$("html,body").find(".toggle").animate({"bottom":"0"})};
	}
};
/**************************************** 页面公用部分 ********************************/


var isJob = 1;
var setFormEvent = function(obj){
	$this = $(obj);   		
    var val = (typeof($(obj).attr('tongji_type')) == 'undefined') ? $(obj).attr('value') : $(obj).attr('tongji_type');
    var valCon = (typeof($(obj).attr('tongji_type_value')) == 'undefined') ? $(obj).attr('value_con') : $(obj).attr('tongji_type_value');
    if(typeof(val) != 'undefined'){
    	$('.popup-main form input[name=eventType]').val(val);		
	}	
    if(typeof(valCon) != 'undefined'){
    	$('.popup-main form input[name=formType]').val(valCon);    	
	}	
    $("html,body").find(".popup-main").fadeIn("fast");
};
$(function(){
    ZQDL.apps.sso.init();                       //登录初始化
    ZQDL.apps.vistCount.init();
    ZQDL.apps.vistCount.initForm();				// 初始化表单埋点数据
	ZQDL.apps.vistCount.countUrl = visittrack_url;
	$('.zixun_count').on('click',function(){ZQDL.apps.vistCount.zixunClick(this);});
	$('.visit_count').on('click',function(){ZQDL.apps.vistCount.visitCount(this);});
	$('.baidu_call').on('click',function(){ZQDL.apps.vistCount.baiduCallClick(this);});
	$('.contact-toggle').on('click',function(){		ZQDL.apps.oTools.contactToggle(this);	});
	$('.verifyInput').on('click',function(){ZQDL.util.verify(this);});
    $('.pop_zixun a').on('click',function(){
    	setFormEvent(this);
        return false;
    });
  //关闭弹窗
    $(".popup-main .close").on("click", function(){
        $(this).parents(".popup-main").fadeOut("fast");
    });
    $('.zixun_pop').on('click',function(){
    	setFormEvent(this);
        return false;
    });
    // qq面板是否隐藏
    var opt = {success:function(info){
            if(info.status == '1'){
                if(info.is_job == '1'){
                    isJob = 1;
                    //展示qq面板
                    $('.job_day_hidden').css('display','block');
                }else{
                    isJob = 0;
                    //展示qq面板
                    $('.job_day_hidden').css('display','none');

                }
            }

        }};
    ZQDL.util.holiday(opt);

    try{
        ZQDL.apps.sso.login();
    }catch(e){
        ZQDL.LOG('单点登录异常');
    }

    ZQDL.apps.toolbar.init();
    $('#___szfw_logo___').on("contextmenu",function(e){return false;});
	$('#___szfw_logo2___').on("contextmenu",function(e){return false;});
	$('.verify_image').on('click',function(){ZQDL.util.verify(this)});
	
	
	
});





