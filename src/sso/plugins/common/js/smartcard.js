$('.zixunsubmit,.smartcard_submit').click(function(){
    var smartcard_slug  =  ZQDL.cookie.get('smartcard_slug');
    var phone = $(this).parents('form').find('[name=mobile]').val();
    var child_slug_str = $(this).parents('form').find('[name=child_slug]');
    var remark_str = $(this).parents('form').find('[name=remark]');
    var truenameObj =  $(this).parents('form').find('[name=truename]');
    var member_idObj =  $(this).parents('form').find('[name=member_id]');
    var remarkObj    = $(this).parents('form').find('[name=remark]');
    var otherObj    = $(this).parents('form').find('[name=other]');
    var yzmObj      = $(this).parents('form').find('[name=yzm]');
    var sms_slugObj  = $(this).parents('form').find('[name=sms_slug]'); //短信模板slug 当活动相同，短信模板不同时候使用
    var child_slug = ''; //通行码类型子详情页slug
    var truename  = '';  //联系名
    var member_id = '';  //300会员Id
    var remark = '';     //备注
    var other = '';      //其他信息
    var yzm   = '';
    var msg_slug = '';
    var remark = '';
    if(truenameObj.val()!=undefined){
        var truename = truenameObj.val()
    }
    if(member_idObj.val()!=undefined){
        var member_id =member_idObj.val();
    }
    if(remarkObj.val()!=undefined){
        var remark =remarkObj.val();
    }
    if(otherObj.val()!=undefined){
        var other =otherObj.val();
    }
    if(yzmObj.val()!=undefined){
        var yzm =yzmObj.val();
    }
    if(sms_slugObj.val()!=undefined){
        var sms_slug =sms_slugObj.val();
    }
    if(child_slug_str.val()==undefined){
        child_slug = smartcard_slug;
    }else{
        child_slug = child_slug_str.val();
    }
    if(remark_str.val()!=undefined){
        var remark = remark_str.val()
    }
    var data= {phone:phone,child_slug:child_slug,truename:truename,member_id:member_id,other:other,remark:remark,yzm:yzm,sms_slug:sms_slug,remark:remark};
    data = JSON.stringify(data);
    ZQDL.cookie.set(smartcard_slug, data, {expires: 60 * 5})

});

$('.smartcard_submit,.ajax_submit').click(function () {
    //必须要 check_yzm 需要验证手机验证码
    var smarcardForm = $(this).parents('form');
    var acttion_url = smarcardForm.attr('action');
    var ischeckMobile = smarcardForm.find("[name=ischeckMobile]");
    var yzm = smarcardForm.find("[name=yzm]");
    var mycall = smarcardForm.find("[name=mobile]");
    if (mycall.val() == '') {
        ZQDL.apps.oTools.alertmess('手机号码不能为空!!');
        return
    }
    if (!validate.checkMobile(mycall.val())) {
        ZQDL.apps.oTools.alertmess('手机号码格式有误!!');
        return false
    }
    var checkMobile = 0;
    var mobileYzm = '';

    if (ischeckMobile.val() == '1' || yzm.length > 0) {
        checkMobile = 1;
        mobileYzm = yzm.val();
        if (mobileYzm == '' || mobileYzm == '输入验证码') {
            ZQDL.apps.oTools.alertmess('请填写验证码');
            return
        }
    }else{
        verify = smarcardForm.find("[name=verify]");
        if (!validate.checkNum(verify.val())) {
            ZQDL.apps.oTools.alertmess('请正确填写验证码');
            return
        }
    }
    //是否ajax提交
    var is_ajax = '';
    var query_typObj = smarcardForm.find("input[name=query_type]");
    if(query_typObj.val()!=undefined){
        if(query_typObj.val()=='is_ajax'){
            is_ajax = '1';
        }
    }
    if(is_ajax>''){
        //回调方式
        ajax_submit(this,acttion_url);
    }else{
        window.location.href = acttion_url;
    }

});

$('.mobile_verify_bn').click(function(){
    if(ZQDL.isLock) return false;
    var smartcard_slug  =  ZQDL.cookie.get('smartcard_slug');
    var child_slug_str = $(this).parents('form').find('input[name=smartcard_slug]');
    if(child_slug_str.val()!=undefined){
        smartcard_slug = child_slug_str.val();
    }
    var mobile = $(this).parents('form').find('input[name=mobile]').val();
    var child_slug_str = $(this).parents('form').find('input[name=child_slug]');
    if(mobile.length!='11'){
        alert('手机号码格式有误!');
        return;
    }
    var thisObj = $(this);
    ZQDL.isLock = true;
    if(!smartcard_slug){
        //表单中是否存在
        var smartcard_slug_str = $(this).parents('form').find('input[name=smartcard_slug]');
        if(smartcard_slug_str.val()!=undefined){
            smartcard_slug =  smartcard_slug_str.val();
        }
        if(!smartcard_slug){
            alert('活动不存在!');
            return;
        }
    }
    if(child_slug_str.val()!=undefined){
        child_slug = child_slug_str.val();
    }else{
        child_slug = smartcard_slug;
    }
    $.post('/smartcard/ckPhone',{mobile:mobile,smartcard_slug:smartcard_slug,child_slug:child_slug,check_yzm:'check_yzm'},function(json){
        if(json.status != '1'){
            var msg = json.info;
            alert(msg);
            ZQDL.isLock = false;
            return;
        }else{
            ZQDL.isLock = false;
            ZQDL.message.send(thisObj);
        }
    },'json');

});

/**
 * ajax提交形式
 * @param $obj
 */
function ajax_submit(obj,acttion_url,fn){
    if(ZQDL.isLock) return false;
    var cecodeForm = $(obj).parents('form');
    var requiredObjs = cecodeForm.find("input.required,select.required,textarea.required");
    for(var i=0;i<requiredObjs.length;i++){
        var rmO = $(requiredObjs[i]);
        if($.trim(rmO.val()) == ''){
            ZQDL.apps.oTools.alertmess(rmO.attr('required_msg'));
            return false;
        }
    }
    var company = cecodeForm.find("[name=company]");
    var msg_titleObj =cecodeForm.find('[name=msg_title]');
    var smartcard_slug_str = cecodeForm.find('[name=smartcard_slug]');
    var child_slug_str = cecodeForm.find('[name=child_slug]');
    var phone =cecodeForm.find('[name=mobile]').val();
    var truenameObj =  cecodeForm.find('[name=truename]');
    var positionObj = cecodeForm.find("[name=position]");
    var industryObj = cecodeForm.find("[name=industry]");
    var member_idObj = cecodeForm.find("[name=member_id]");
    var yzmObj      = cecodeForm.find('[name=yzm]');
    var stateObj    = cecodeForm.find('[name=state]');
    var email = cecodeForm.find("[name=email]");
    var remark_str = cecodeForm.find('[name=remark]');
    var smartcard_slug = '';
    var child_slug ='';
    var truename = '';
    var position = '';
    var industry = '';
    var msg_title = '';
    var member_id = '';
    var yzm ='';
    var state = '0';
    var mail ='';
    var remark = '';
    var verify = '';
    if(smartcard_slug_str.val()!=undefined){
        smartcard_slug =  smartcard_slug_str.val();
    }
    if(child_slug_str.val()!=undefined){
        child_slug = child_slug_str.val();
    }else{
        child_slug = smartcard_slug;
    }

    if(truenameObj.val()!=undefined){
        truename = truenameObj.val();
    }
    if(positionObj.val()!=undefined){
        position = positionObj.val();
    }
    if(industryObj.val()!=undefined){
        industry = industryObj.val();
    }
    if(msg_titleObj.val()!=undefined){
        msg_title = msg_titleObj.val();
    }
    if(member_idObj.val()!=undefined){
        member_id = member_idObj.val();
    }
    if(yzmObj.val()!=undefined){
        var yzm =yzmObj.val();
    }else{
        verifyObj = cecodeForm.find("[name=verify]");
        if(verifyObj.val()!=undefined){
            var verify =verifyObj.val();
        }
    }
    if(stateObj.val()!=undefined){
        var state =stateObj.val();
    }
    if(email.val()!=undefined){
        var mail =email.val();
    }
    if(remark_str.val()!=undefined){
        remark =remark_str.val();
    }

    ZQDL.isLock = true;
    var data = {
        is_ajax:1,
        verify:verify,
        check_yzm:'check_yzm',
        company: company.val()!=undefined?company.val():'',
        remark:remark,
        phone:phone,yzm:yzm,truename:truename,mail:mail,position:position,industry:industry,child_slug:child_slug,smartcard_slug:smartcard_slug,msg_title:msg_title,member_id:member_id,state:state};
    $.post(acttion_url,data,function(json){
        //回调函数处理
        if (typeof fn == "function") {
            fn(obj,json);
        }else{
            if(json.status == '1'){
                var msg = json.info;
                alert('提交成功！');
                history.go(-1)
                return;
            }else{
                ZQDL.isLock = false;
                var msg = json.info;
                alert(msg);
            }
        }
    },'json');



}