/**
 * 表单提交
 * @author 高世岑
 */

(function($) {
	
	
	
	$('.marketPaySubmit').on('click', function() {
		form.marketPaySubmit(this)
	});
	$('.zixunsubmit').on('click', function() {
		form.zixunSubmit(this)
	});
	$('.submitCaseVip').on('click', function() {
		form.caseVipSubmit(this)
	});
	$('.paixunSubmit').on('click', function() {
		form.paixunSubmit(this)
	});
	$('.zerosubmit').on('click', function() {
		form.zeroSubmit(this, form)
	});
	$('a[clickcount="true"]').on('click', function() {
		form.tqCount(this)
	});
	$('.freequote-submit').on('click', function() {
		form.zixunSubmit(this, form, fn)
	});
	
	var fc_close=$(".fc-close");
	var float_contact=$(".float-contact");
	fc_close.on("click", function(){
		float_contact.hide();
	});	
})(Zepto);
var $iframe = $('#googleScript');
var iframeLink = '/special/google_script.html';
var zixunTime = true;
var feedbackTime = true;
var paixunTime = true;
var zeroTime = true;
var form = {
	init: function() {},
	marketPaySubmit: function(obj) {
		var form = $(obj).parents('form');
		var company = form.find("input[name=company]");
		var mycall = form.find("input[name=mobile]");
		var gp = form.find("input[name=province]");
		var gt = form.find("input[name=city]");
		var gd = form.find("input[name=district]");
		var name = form.find("input[name=truename]");
		var yzm = form.find("input[name=yzm]");
		var email = form.find("input[name=email]");
		if (!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || (name.val() == '' && name.length > 0)) {
			ZQDL.apps.oTools.alertmess('信息不能为空!');
			return false
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return false
		}
		if (!validate.checkEmail(email.val()) && email.length > 0) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return false
		}
		return form.submit()
	},
	zixunSubmit: function(obj, formObj, fn) {

		var $this = $(obj);
		var succMsg = '';
		
		if(typeof($this.attr('suc-msg')) != 'undefined')succMsg=$this.attr('suc-msg');		
		var type = $this.attr('data-btntype');

		var method = $(obj).parents('form');
		if (!zixunTime) {
			ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
			return
		}
		if ($(obj).attr('value')) $('#admin_add_value').val($(obj).attr('value'));
		var admin_add_value = $('#admin_add_value').val();
		var admin_add = $('#admin_add').val();
		var zixunForm = $(obj).parents('form');
		var company = zixunForm.find("input[name=company]");
		var ischeckMobile = zixunForm.find("input[name=ischeckMobile]");
		var yzm = zixunForm.find("input[name=yzm]");
		var mycall = zixunForm.find("input[name=mobile]");
		var name = zixunForm.find("input[name=truename]");
		
		var email = zixunForm.find("input[name=email]");			
		var indu = zixunForm.find("input[name=indu]");
		var client = zixunForm.find("input[name=client]");
		var brand = zixunForm.find("input[name=brand]");
		var agree = zixunForm.find("input[name=agree]");
		var verify = zixunForm.find("input[name=verify]");
		var baiduSource= zixunForm.find("input[name=baiduSource]");
		var source= zixunForm.find("input[name=source]");

		// 埋点所需数据
		var logId = zixunForm.find("input[name=log_id]");
		if(logId.val() == ''){
			logId.val(ZQDL.util.uuid.get());
		}
		var promoteSlug = zixunForm.find("input[name=promoteSlug]");			
		var channelSlug = zixunForm.find("input[name=channelSlug]");
		var formSlug = zixunForm.find("input[name=formSlug]");
		var landUrl = zixunForm.find("input[name=landUrl]");
		var formType = zixunForm.find("input[name=formType]");
		var eventType = zixunForm.find("input[name=eventType]");
		var sourceUrl= zixunForm.find("input[name=sourceUrl]");

		// 表单不定字段开始
		var remarkObjs = zixunForm.find("input.remark,select.remark,textarea.remark");
		var requiredObjs = zixunForm.find("input.required,select.required,textarea.required");
		var otherObj = zixunForm.find("input.other,select.other,textarea.other");
		var checkbox_hid = zixunForm.find("input[name=checkbox_hid]");  //标识是否有多选框


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
			zixunForm.find("input[name="+checbox_name+"]:checked").each(function(){
				chckbox__array.push($(this).val());//向数组中添加元素
			});
			var checkbox_str=chckbox__array.join(',');//将数组元素连接起来以构建一个字符串
			other[checbox_title] = checkbox_str;
		}

		// 表单不定字段结束
		
		var checkMobile = 0;
		var mobileYzm = '';
		$('#hidden_value').val(admin_add);
		
		if (mycall.val() == '') {
			ZQDL.apps.oTools.alertmess('手机号码不能为空!');
			return
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		if (ischeckMobile.val() == '1' || yzm.length > 0) {
			checkMobile = 1;
			mobileYzm = yzm.val();
			if (mobileYzm == '' || mobileYzm == '输入验证码') {
				ZQDL.apps.oTools.alertmess('请填写验证码');
				return
			}
		}else{
			if (!validate.checkNum(verify.val())) {
				ZQDL.apps.oTools.alertmess('请正确填写验证码');
				return
			}
		}
		
		if (!validate.checkEmail(email.val()) && email.length > 0) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return
		}
		if (brand.val() == '' && brand.length > 0) {
			var brands = '未提供'
		} else {
			var brands = brand.val()
		}
		if (agree.length > 0 && agree.attr('checked') != 'checked') {
			ZQDL.apps.oTools.alertmess('您还未同意《车万家行业方案使用协议》');
			return
		}
		try{
			var creater = ZQDL.apps.sso.getMemberId() ? ZQDL.apps.sso.getMemberId() : ZQDL.apps.visitSessionId;
			var createrName = ZQDL.apps.sso.getMemberId() ? '会员' : '访客';
		}catch(e){
			ZQDL.LOG(e.name + ": " + e.message);
		}
		
		var data = {
			company: company.val(),
			truename: name.val(),
			mobile: mycall.val(),
			email: email.val(),
			admin_add: admin_add,
			mcode: mobileYzm,
			brand: brands,
			creater:creater,
			createrName : createrName,
			point: admin_add_value,
			verify:verify.val(),
			ischeckMobile:checkMobile,
			remark:remark,
			logId:logId.val(),
			
			promoteSlug: promoteSlug.val(),
			channelSlug: channelSlug.val(),
			formSlug: formSlug.val(),
			landUrl: landUrl.val(),
			formType: formType.val(),
			eventType: eventType.val(),
			sourceUrl: sourceUrl.val(),
			
			other : other,
			baiduSource: baiduSource.val()?baiduSource.val():'INTENTION_SOURCE_300_FORM01',
			source: source.val()?source.val():'',
		};
		
		zixunTime = false;
		if (client.length > 0) {
			data.client = client.val()
		}
		if (indu.length > 0) {
			data.indu = indu.val()
		}
		$.getJSON(zixunForm.attr('action') + '&callback=?', data, function(data) {
			if (data.status != '1') {
				zixunTime = true;
				ZQDL.apps.oTools.alertmess(data.info);
				return
			}
			ZQDL.apps.vistCount.formSubmit(obj);
			zixunForm[0].reset();
			//form.loadFormIframe();			
			var tmpMobile = mycall.val();
			if ($('#is_vip').val() == '1') {
				ZQDL.cookie.set('case_phone', mycall.val(), {
					expires: 3600 * 24 * 360
				});
				window.location.href = "/case";
				return false
			}
			$('.close').click();
			
			if (zixunForm.find("input[name=is_pop]").val() == 1) {
				zixunForm[0].reset();
				$(".zx_pop").hide();
				
			}

			// 判断谷歌浏览器加载代码
			googleFn($iframe, iframeLink, type);
			
			// method.submitCount({
			// 	mobile: tmpMobile
			// });
			if (typeof fn == "function") {
				fn(obj);
				return
			}
			var skipurl = zixunForm.find("input[id=skipurl]");
			if(skipurl.val()!==undefined){
			    var ziObjs = zixunForm.find("input[name=zixun]");
				if(ziObjs.val() == undefined){
					var skipurl = $('#skipurl').val();
					ZQDL.cookie.set('skipurl', '1', {
						expires: 3600
					});
					ZQDL.apps.oTools.alertmess('提交成功');
					parent.location.href = skipurl;
					return false
				}
			}
			succMsg = succMsg == '' ? '提交成功' : succMsg;
			ZQDL.apps.oTools.alertmess(succMsg);
			if (ischeckMobile.val() == '1' || yzm.length > 0) ZQDL.cookie.set('special_case_www300cn','1',{expires:24*3600});
			var succ_href = $('#succ_href').val();
			if (succ_href) setTimeout(function() {
				window.location.href = succ_href
			}, 2000);
			setTimeout(function() {
				zixunTime = true
			}, 60000)
		}, 'json')
	},
	loadFormIframe : function(){
		var iframeObj = $('#formFrame');
		if(iframeObj.length){
			iframeObj.attr('src','/formsubmit.html');
			return true;
		}
		iframeObj = $(document.createElement("iframe"));
		iframeObj.attr({width:0,height:0,src:'/formsubmit.html',id:'formFrame'});
		iframeObj.hide();
		$('body').append(iframeObj);
		
	},
	feedbackSubmit: function(obj) {
		if (!feedbackTime) {
			ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
			return
		}
		var form = $(obj).parents('form');
		var company = form.find("input[name=title]");
		var mycall = form.find("input[name=phone]");
		var gp = form.find("input[name=province]");
		var gt = form.find("input[name=city]");
		var gd = form.find("input[name=district]");
		var name = form.find("input[name=truename]");
		var sex = form.find("input[name='sex']:checked");
		var email = form.find("input[name=email]");
		var content = form.find("textarea[name=content]");
		if (content.val() == '' || !validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || name.val() == '' || sex.val() == '' || email.val() == '') {
			ZQDL.apps.oTools.alertmess('信息不能为空!');
			return
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		if (!validate.checkEmail(email.val())) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return
		}
		feedbackTime = false;
		$(this).ajaxSubmit()
	},
	caseVipSubmit: function(obj) {
		var form = $(obj).parents('form');
		var mycall = form.find("input[name=mobile]");
		var gp = form.find("input[name=province]");
		var gt = form.find("input[name=city]");
		var gd = form.find("input[name=district]");
		var email = form.find("input[name=email]");
		var indu = form.find("textarea[name=indu]");
		if (indu.val() == '' || gp.val() == '' || gt.val() == '' || gp.val() == '请选择省份' || gt.val() == '请选择城市' || mycall.val() == '') {
			ZQDL.apps.oTools.alertmess('信息不能为空!');
			return
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		if (email.val() != '' && !validate.checkEmail(email.val())) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return
		}
		var data = form.serialize();
		data += "&admin_add=" + $('#admin_add').val();
		$.post(form.attr('action'), data, function(data) {
			if (data.status != '1') {
				ZQDL.apps.oTools.alertmess(data.info);
				return
			}
			ZQDL.cookie.set('case_phone', mycall.val(), {
				expires: 3600 * 24 * 360
			});
			gp.val("请选择省份");
			gt.val("请选择城市");
			gd.val('请选择区/县');
			mycall.val("");
			form.find("input[name=company]").val("");
			email.val("");
			indu.val('');
			window.location.href = "/case"
		}, 'json')
	},
	paixunSubmit: function(obj) {
		if (!paixunTime) {
			ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
			return
		}
		var form = $(obj).parents('form');
		var company = form.find("input[name=title]");
		var mycall = form.find("input[name=mobile]");
		var gp = form.find("input[name=province]");
		var gt = form.find("input[name=city]");
		var gd = form.find("input[name=district]");
		var email = form.find("input[name=email]");
		var number = form.find("input[name=number]");
		var name = form.find("input[name=truename]");
		if (!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || name.val() == '' || email.val() == '' || number.val() == '') {
			ZQDL.apps.oTools.alertmess('信息不能为空!');
			return
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		if (email.val() != '' && !validate.checkEmail(email.val())) {
			ZQDL.apps.oTools.alertmess('email格式有误');
			return
		}
		paixunTime = false;
		$.post(form.attr('action'), form.serialize(), function(data) {
			if (data.status != '1') {
				paixunTime = true;
				ZQDL.apps.oTools.alertmess(data.info);
				return
			}
			paixunTime = false;
			setTimeout(function() {
				paixunTime = true
			}, 60000);
			ZQDL.apps.oTools.alertmess(data.info);
			gp.val('请选择省份');
			gt.val('请选择城市');
			company.val('');
			mycall.val('');
			email.val('');
			number.val('');
			name.val('');
			gd.val('请选择区/县')
		})
	},
	zeroSubmit: function(obj, form) {
		if (!zeroTime) {
			ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
			return
		}
		var method = form;
		var admin_add = $('#admin_add').val();
		var admin_add_value = $('#admin_add_value').val();
		var areacode = $('#area_code').val();
		var form = $(obj).parents('form');
		var mycall = form.find("input[name=mobile]");
		var gp = form.find("input[name=province]");
		var gt = form.find("input[name=city]");
		var gd = form.find("input[name=district]");
		var name = form.find("input[name=truename]");
		$('#hidden_value').val(admin_add);
		if (!validate.checkCity(gp.val(), gt.val(), gd.val()) || mycall.val() == '' || name.val() == '') {
			ZQDL.apps.oTools.alertmess('信息不能为空!');
			return
		}
		if (!validate.checkMobile(mycall.val())) {
			ZQDL.apps.oTools.alertmess('手机号码格式有误');
			return
		}
		zeroTime = false;
		var data = {
			truename: name.val(),
			province: gp.val(),
			city: gt.val(),
			district: gd.val(),
			area_code: areacode,
			mobile: mycall.val(),
			admin_add: admin_add,
			point: admin_add_value
		};
		$.post(form.attr('action'), data, function(data) {
			if (data.status != '1') {
				zeroTime = true;
				ZQDL.apps.oTools.alertmess(data.info);
				return
			}
			setTimeout(function() {
				zeroTime = true
			}, 60000);
			if ($('#is_vip').val() == '1') {
				ZQDL.cookie.set('case_phone', mycall.val(), {
					expires: 3600 * 24 * 360
				});
				window.location.href = "/case";
				return false
			}

			var tmpMobile = mycall.val();
			gp.val("请选择省份");
			gt.val("请选择城市");
			mycall.val("");
			name.val("");
			gd.val('请选择区/县');
			if (form.find("input[name=is_pop]").val() == 1) {
				$(".zero_pop").hide()
			}
			method.submitCount({
				mobile: tmpMobile
			});
			ZQDL.apps.oTools.alertmess('提交成功')
		}, 'json')
	},
	tqCount: function(obj) {
		var className = $(obj).attr('clickadd');
		var ch = $('#ch').val();
		var firstid = $('#firstid').val();
		var admin_add = $('#admin_add').val();
		var url = document.location.href;
		var ip = ZQDL.position.getIp();
		if (!ip) ip = '';
		var data = {
			admin_add: admin_add,
			class_name: className,
			firstid: firstid,
			url: url,
			ch: ch,
			ip: ip
		};
		$.post('/count/countTQ', data, function(data) {})
	},
	submitCount: function(data) {
		var mobile = data['mobile'];
		var admin_add_value = $('#admin_add_value').val();
		var admin_add = $('#admin_add').val();
		var ch = $('#ch').val();
		var firstid = $('#firstid').val();
		var url = document.location.href;
		var ip = ZQDL.position.getIp();
		if (!ip) ip = '';
		var data = {
			admin_add: admin_add,
			mobile: mobile,
			point: admin_add_value,
			firstid: firstid,
			url: url,
			ch: ch,
			ip: ip
		};
		$.post('/count/countSubmit', data, function(data) {})
	}
};
var validate = {
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

function googleFn($iframe, iframeLink, type){
	if(type == 'google'){
		if($iframe.attr('src') == "###"){
		$iframe.attr('src', iframeLink)			
		}else{
			$iframe[0].contentWindow.location.reload(true)
		}
	}
}
		