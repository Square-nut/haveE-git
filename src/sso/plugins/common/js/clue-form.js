/**
 * 线索表单
 * @author yangmeiling
 */
(function($) {
    $('.cluesubmit').on('click', function() {
    	var obj = $(this).parents('form');
        cform.clueSubmit(obj)

    });
})(jQuery);
var clueTime = true;
var cform = {
	init: function() {},
    /**
	 * 表单提交方法
	 * 提供表单对象，返回结果，不做提示
     * @param obj
     * @param formObj
     * @param fn 回调函数名
     * @returns {boolean}
     */
	clueSubmit: function(obj,fn) {
		if (!clueTime) {
			ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
			return
		}
		var clueForm = $(obj);

		var company = clueForm.find("input[name=company]");
		var ischeckMobile = clueForm.find("input[name=ischeckMobile]");
		var yzm = clueForm.find("input[name=yzm]");
		var mycall = clueForm.find("input[name=mobile]");
		var name = clueForm.find("input[name=truename]");
		
		var email = clueForm.find("input[name=email]");
        var client = clueForm.find("input[name=client]");
		var brand = clueForm.find("input[name=brand]");
		var verify = clueForm.find("input[name=verify]");
		var baiduSource= clueForm.find("input[name=baiduSource]");
        var hidden_yzmObj = clueForm.find("input[name=hidden_yzm]");

        var tuijian_id = clueForm.find("input[name=tuijian_id]");

        // 埋点所需数据
		var logId = clueForm.find("input[name=log_id]");
		if(logId.val() == ''){
			logId.val(ZQDL.util.uuid.get());
		}
		var promoteSlug = clueForm.find("input[name=promoteSlug]");			
		var channelSlug = clueForm.find("input[name=channelSlug]");
		var formSlug = clueForm.find("input[name=formSlug]");
		var landUrl = clueForm.find("input[name=landUrl]");
		var formType = clueForm.find("input[name=formType]");
		var eventType = clueForm.find("input[name=eventType]");
		var sourceUrl= clueForm.find("input[name=sourceUrl]");

		// 表单不定字段开始
		var remarkObjs = clueForm.find("input.remark,select.remark,textarea.remark");
		var requiredObjs = clueForm.find("input.required,select.required,textarea.required");
		var otherObj = clueForm.find("input.other,select.other,textarea.other");
		var checkbox_hid = clueForm.find("input[name=checkbox_hid]");  //标识是否有多选框
		for(var i=0;i<requiredObjs.length;i++){
			var rmO = $(requiredObjs[i]);
			if($.trim(rmO.val()) == ''){
				ZQDL.apps.oTools.alertmess(rmO.attr('required_msg'));
				return false;
			}
		}
		var remark = '';		
		for(var i=0;i<remarkObjs.length;i++){
			if(remark != '') remark += "_";
			var rmO = $(remarkObjs[i]);
			remark += rmO.attr('remark_title') + rmO.val();
		}
		var other = {};
		for(var i=0;i<otherObj.length;i++){
			if(remark != '') otherObj += "_";
			var rmO = $(otherObj[i]);
			other[rmO.attr('other_title')] = rmO.val();
		}

		if(checkbox_hid.val()!=undefined){
			var checbox_title= checkbox_hid.val();
			var checbox_name = checkbox_hid.attr('checkbox_title');
			var chckbox__array=new Array();
			clueForm.find("input[name="+checbox_name+"]:checked").each(function(){
				chckbox__array.push($(this).val());//向数组中添加元素
			});
			var checkbox_str=chckbox__array.join(',');//将数组元素连接起来以构建一个字符串
			other[checbox_title] = checkbox_str;
		}

		// 表单不定字段结束
		var checkMobile = 0;
		var mobileYzm = '';

		if (mycall.val() == '') {
			ZQDL.apps.oTools.alertmess('手机号码不能为空!');
			return
		}
		if (!validate1.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		//是否验证验证码
		if(hidden_yzmObj.val()===undefined){
            if (ischeckMobile.val() == '1' || yzm.length > 0) {
                checkMobile = 1;
                mobileYzm = yzm.val();
                if (mobileYzm == '' || mobileYzm == '输入验证码') {
                    ZQDL.apps.oTools.alertmess('请填写验证码');
                    return
                }
            }else{
                if (!validate1.checkNum(verify.val())) {
                    ZQDL.apps.oTools.alertmess('请正确填写验证码');
                    return
                }
            }
		}
		if (!validate1.checkEmail(email.val()) && email.length > 0) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return
		}

		try{
			var creater = ZQDL.apps.sso.getMemberId() ? ZQDL.apps.sso.getMemberId() : ZQDL.apps.visitSessionId;
			var createrName = ZQDL.apps.sso.getMemberId() ? '会员' : '访客';
		}catch(e){
			ZQDL.LOG(e.name + ": " + e.message);
		}
		
		var data = {
			company: company.val()!=undefined?company.val():'',
			truename: name.val()!=undefined?name.val():'',
			mobile: mycall.val(),
			email: email.val()!=undefined?email.val():'',
            client:client.val()!=undefined?client.val():'',
			mcode: mobileYzm,
			creater:creater,
			createrName : createrName,
			verify:verify.val(),
			ischeckMobile:checkMobile,
			remark:remark,
			logId:logId.val(),
			
			promoteSlug: promoteSlug.val()!=undefined?promoteSlug.val():'',
			channelSlug: channelSlug.val()!=undefined?channelSlug.val():'',
			formSlug: formSlug.val()!=undefined?formSlug.val():'',
			landUrl: landUrl.val()!=undefined?landUrl.val():'',
			formType: formType.val()!=undefined?formType.val():'',
			eventType: eventType.val()!=undefined?eventType.val():'',
			sourceUrl: sourceUrl.val()!=undefined?sourceUrl.val():'',
			other : other,
			baiduSource: baiduSource.val()!=undefined?baiduSource.val():'INTENTION_SOURCE_300_FORM01',
			tuijian_yzm:hidden_yzmObj.val()!=undefined?hidden_yzmObj.val():''
		};
		clueTime = false;
		$.getJSON(clueForm.attr('action') + '&callback=?', data, function(result) {
            clueTime = true;
            ZQDL.apps.vistCount.formSubmit(obj);
            if (typeof fn == "function") {
                fn(obj,result,data);
            }
		}, 'json')
	},

};
var validate1 = {
	checkEmail: function(email) {
		var email_reg = /^[a-z0-9]+([._-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
		if (email == '' || email == null) return true;
		if (!email_reg.test(email)) return false;
		return true
	},
	checkMobile: function(mobile) {
		var mobile_reg = /^0?(13|15|17|18|14)[0-9]{9}$/;
		var gatmobile_reg = /^0{0,2}(852|853|886)-?(09|9)?[0-9]{8}$/;
		if (!mobile_reg.test(mobile) && !gatmobile_reg.test(mobile)) return false;
		return true
	},
	checkNum: function(num) {
		var num_reg = /^[0-9]{3}$/;
		if (!num_reg.test(num)) return false;
		return true
	},
	notempty: function(val) {
		if (val != '') return true;
		return false
	},
	checkCity: function(gp, gt, gd) {
		if (gp == '请选择省份' || gp == '') return false;
		for (var p in provincesdata) {
			if (p == gp) {
				if (!provincesdata[p]['sub']) {
					if (gp == gt && gp == gd) return true;
					return false
				}
				if (gt == '请选择城市' || gt == '') return false;
				for (var t in provincesdata[p]['sub']) {
					if (t == gt) {
						if (!provincesdata[p]['sub'][t]['sub']) {
							if (gt == gd) return true;
							return false
						}
						if (gd == '请选择区/县' || gd == '') return false;
						return true
					}
				}
			}
		}
	}
};


		