/**
 *推荐表单通用
 * @author yangmeiling
 */
(function($) {
    $('.tuijian_submit_loop').on('click', function() {
        //检查循环提交的内容
        var form_arr = [];
        var check_res = true;
        $(".tuijian").each(function(i,v) {
            if ($(v).hasClass("clue-from-show")) {
                var clue_form = $(v);
                //检查必填选项
                var requiredObjs = clue_form.find("input.required,select.required,textarea.required");
                for(var i=0;i<requiredObjs.length;i++){
                    var rmO = $(requiredObjs[i]);
                    if($.trim(rmO.val()) == ''){
                        check_res = false;
                        ZQDL.apps.oTools.alertmess(rmO.attr('required_msg'));
                        return;
                }
                }
                //检查内容是否重复
                var mobile_str = clue_form.find("input[name=mobile]");
                var mobile = mobile_str.val()!=undefined? mobile_str.val():'';
                //form 表单中有类clue-from-show才能可提交
                //内容判断
                var info_str = mobile;
                if(mobile>''){
                    var result = $.inArray(mobile, form_arr); //返回index为2
                    if(result!='-1'){
                        check_res = false;
                        ZQDL.apps.oTools.alertmess('手机号重复！');
                        return ;
                    }
                    form_arr.push(info_str);//信息存入数组
                }else{
                    ZQDL.apps.oTools.alertmess('请填写手机号！');
                }
            }
        });
        if(check_res){
            // //推荐人自己信息提交
             var obj = $(this).parents('form');
             if(obj.length==0){
                 var  obj = '#tuijian-own';
             }
             showLoading("body");
            tform.tuijianSubmit(obj,function callBackReload() {
                ZQDL.apps.oTools.alertmess('提交成功！');
                for (var i = 0; i < $("form").length; i ++ ) {
                    $("form")[i].reset();
                }
                hideLoading("body");
                setTimeout(function () {
                    location.reload();
                }, 3000);
            });
        }

    });
    $('.tuijian_submit').on('click', function() {
        tform.tuijianSubmit();
    });
})(jQuery);
var tTime = true;
var tform = {
	init: function() {},
    tuijianSubmit: function(obj,fn) {
        if (!tTime) {
            ZQDL.apps.oTools.alertmess('已提交，不需要重复提交！');
            return
        }
        var tuijianForm = $(obj);
        //检查必填项
        var requiredObjs = tuijianForm.find("input.required,select.required,textarea.required");
        for(var i=0;i<requiredObjs.length;i++){
            var rmO = $(requiredObjs[i]);
            if($.trim(rmO.val()) == ''){
                ZQDL.apps.oTools.alertmess(rmO.attr('required_msg'));
                return false;
            }
        }
        //处理字段
        var company = tuijianForm.find("input[name=company]");
        var name = tuijianForm.find("input[name=truename]");
        var ischeckMobile = tuijianForm.find("input[name=ischeckMobile]");
        var mycall = tuijianForm.find("input[name=mobile]");
        var yzm = tuijianForm.find("input[name=yzm]");
        var verify = tuijianForm.find("input[name=verify]");

        var email = tuijianForm.find("input[name=email]");
        var businessbn = tuijianForm.find("input[name=businessbn]");
        var industry = tuijianForm.find("input[name=industry]");
        var position  = tuijianForm.find("input[name=position]");

        var member_id  = tuijianForm.find("input[name=member_id]");

        var cecode = tuijianForm.find("input[name=cecode]");
        var smartcard_slug  = tuijianForm.find("input[name=smartcard_slug]");
        var child_slug  = tuijianForm.find("input[name=child_slug]");

        // 表单不定字段开始
        var remarkObjs = tuijianForm.find("input.remark,select.remark,textarea.remark");
        var otherObj = tuijianForm.find("input.other,select.other,textarea.other");
        var checkbox_hid = tuijianForm.find("input[name=checkbox_hid]");  //标识是否有多选框
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
            tuijianForm.find("input[name="+checbox_name+"]:checked").each(function(){
                chckbox__array.push($(this).val());//向数组中添加元素
            });
            var checkbox_str=chckbox__array.join(',');//将数组元素连接起来以构建一个字符串
            other[checbox_title] = checkbox_str;
        }
        // 表单不定字段结束
		//检验手机,验证码,邮箱格式
        var checkMobile = 0;
        var mobileYzm = '';

        if (mycall.val() == '') {
            ZQDL.apps.oTools.alertmess('手机号码不能为空!');
            return
        }
        if (!validate1.checkMobile(mycall.val())) {
            ZQDL.apps.oTools.alertmess('手机号码格式有误!');
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
            if (!validate1.checkNum(verify.val())) {
                ZQDL.apps.oTools.alertmess('请正确填写验证码');
                return
            }
        }
        if (!validate1.checkEmail(email.val()) && email.length > 0) {
            ZQDL.apps.oTools.alertmess('email格式有误');
            return
        }
        //组合数据
        var data = {
            company: company.val()!=undefined?company.val():'',
            truename: name.val()!=undefined? name.val():'',
            phone: mycall.val(),
            mcode: mobileYzm?mobileYzm:'',
            verify:verify.val()!=undefined?verify.val():'',
            ischeckMobile:checkMobile,

            mail: email.val()!=undefined?email.val():'',
            businessbn :businessbn.val()!=undefined?businessbn.val():'',
            industry:industry.val()!=undefined?industry.val():'',
            position:position.val()!=undefined?position.val():'',
            child_slug:child_slug.val()!=undefined?child_slug.val():'',
            smartcard_slug:smartcard_slug.val()!=undefined?smartcard_slug.val():'',
            cecode:cecode.val()!=undefined?cecode.val():'',
            member_id:member_id.val()!=undefined?member_id.val():'',
            remark:remark,
            other : other,

        };

        var url = tuijianForm.attr('action');
        if(url=='/customer/clue?is_ajax=1'){
            url = '/tuijian/addtuijian';
        }

        $.post(url,data,function(json) {
            if (json.status == '1') {
                var tuijian_id = json.info;
                var code = mobileYzm?mobileYzm:verify.val();
                doTuijianReult(tuijian_id,code,fn);
            }else{
                hideLoading("body");
                ZQDL.apps.oTools.alertmess(json.info);
                return ;
            }
        });
    },
};

/**
 * 推荐表提交成功后处理结果
 * @param tuijian_id
 * @param code
 */
function doTuijianReult(tuijian_id,code,fn) {
    if(tuijian_id>''&&code>''){
        var form_arr = [];
        var formcount =  $(".clue-from-show").size();
        //检查推荐人
        $(".clue-from-show").each(function(i,v){
            i++;
            //判断内容是否重复
            var clue_form = $(v);
            //检查内容是否重复
            var mobile_str = clue_form.find("input[name=mobile]");
            var mobile = mobile_str.val()!=undefined? mobile_str.val():'';
            //内容判断
            var result = $.inArray(mobile, form_arr); //返回index为2
            //不重复才可以提交
            form_arr.push(mobile);//信息存入数组
            if(result=='-1'){
                //表单循环完成后台
                if(i==formcount){
                    clueTijiao(v,tuijian_id,code,fn);
                }else{
                    clueTijiao(v,tuijian_id,code);
                }
            }

        });
    }
}

/**
 * 线索提交后的的处理
 * @param obj
 * @param tuijian_id
 * @param code
 * @returns {boolean}
 */
function clueTijiao(obj,tuijian_id,code,fn){
    var clueform = $(obj);
    var hidden_yzm_code = clueform.find("input[name=verify]");
    var requiredObjs = clueform.find("input.required,select.required,textarea.required");
    for(var i=0;i<requiredObjs.length;i++){
        var rmO = $(requiredObjs[i]);
        if($.trim(rmO.val()) == ''){
            ZQDL.apps.oTools.alertmess(rmO.attr('required_msg'));
            return;
        }
    }
    if(hidden_yzm_code.val()!=undefined){
        hidden_yzm_code.val(code);
    }
    var tjinput=$('<input type="hidden" name="remark" class="role_name other"  value="'+tuijian_id+'"  other_title="推荐人ID"  />');
    clueform.append(tjinput);
    //var verifyUrl = '/verify/getVerify?date='+new Date().getTime();
   // $.post(verifyUrl,{code:code},function(json){},'json');
    //调用返回值有问题
    clueTime = true;
    cform.clueSubmit(obj, function callBackClueCode(obj,result,data) {
       var clude_code = '';
        if(result.status=='1'){
           clude_code = result.info;
           data['tuijian_id'] = tuijian_id;
           data['clude_code'] = clude_code;
           addTuijianFriend(obj,data,fn);
        }else{
            addTuijianFriend('','',fn);
        }
    });
}

/**
 * 添加被推荐人
 * @param obj
 * @param clueCode
 * @param tuijianID
 */
function addTuijianFriend(obj,data,fn) {
    if(data>''){
        var friend_url = '/tuijian/addFriend';
        $.post(friend_url,data,function(json) {
            if(json.status!='1'){
                console.log(json.info);
            }
            if (typeof fn == "function") {
                fn();
            }
        });
    }else{
        //线索未提交成功，结束
        if (typeof fn == "function") {
            fn();
        }
    }


}


//显示加载动画
var showLoading = function (e) {
    var container = $(e);
    if (container.find(".loadEffect").length == 0) {
        var html = '<div class="loadEffect" style="display:none;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>';
        var css = '<style id="loadingCss">@-webkit-keyframes load{0%{opacity:1}100%{opacity:0.2}}.loadEffect{width:40px;height:42px;position:fixed;left:50%;top:42%;transform:translate(-50%,-50%)}.loadEffect span{display:inline-block;width:12px;height:4px;border-top-left-radius:2px;border-bottom-left-radius:2px;background:#000;position:absolute;-webkit-animation:load 1.04s ease infinite}.loadEffect span:nth-child(1){left:0;top:19px;-webkit-animation-delay:0.13s}.loadEffect span:nth-child(2){left:4px;top:9px;-webkit-transform:rotate(45deg);-webkit-animation-delay:0.26s}.loadEffect span:nth-child(3){left:14px;top:5px;-webkit-transform:rotate(90deg);-webkit-animation-delay:0.39s}.loadEffect span:nth-child(4){top:9px;right:4px;-webkit-transform:rotate(135deg);-webkit-animation-delay:0.52s}.loadEffect span:nth-child(5){right:0;top:19px;-webkit-transform:rotate(180deg);-webkit-animation-delay:0.65s}.loadEffect span:nth-child(6){right:4px;bottom:9px;-webkit-transform:rotate(225deg);-webkit-animation-delay:0.78s}.loadEffect span:nth-child(7){bottom:5px;left:14px;-webkit-transform:rotate(270deg);-webkit-animation-delay:0.91s}.loadEffect span:nth-child(8){bottom:9px;left:4px;-webkit-transform:rotate(315deg);-webkit-animation-delay:1.04s}</style>';
        container.append(css);
        container.append(html);
        $(".loadEffect").fadeIn("fast");
    }
}

//隐藏加载动画
var hideLoading = function (e) {
    var container = $(e);
    if (container.find(".loadEffect").length > 0) {
        $(".loadEffect").fadeOut("fast");
        setTimeout(function(){
            $(".loadEffect").remove();
            $("#loadingCss").remove();
        }, 1000);
    }
}