<template>

  <div class="agent fix auto ">
    <div class="agent-head mt50 ml20 mr20">
      <p class="f18 pl20">代理商加盟申请表</p>
    </div>
    <div class="agent-form fl ml40">
      <form name="agent-form"
            id="agent-form">
        <div style="margin-top:24px;">
          <div class="mt25">
            <div class="dib w100  tr"><i class="red">*</i>公司名称：</div>
            <input id="companyName"
                   name="companyName"
                   class="h30 w300 bodgray p10"
                   type="text"
                   placeholder="请输入公司名称"
                   maxlength="20">
          </div>
          <div class="mt25">
            <div class="dib w100 tr"><i class="red">*</i>公司联系人：</div>
            <input id="companyContact"
                   name="companyContact"
                   class="h30 w300 bodgray p10"
                   type="text"
                   maxlength="10"
                   placeholder="请输入公司联系人">
          </div>
          <div class="mt25">
            <div class="dib w100 tr"><i class="red">*</i>联系人手机号：</div>
            <input id="contactMobile"
                   name="contactMobile"
                   class="h30 w300 bodgray p10"
                   type="text"
                   maxlength="11"
                   placeholder="请输入联系人手机号">
          </div>
          <div class="mt25">
            <div class="dib w100 tr"><i class="red">*</i>公司所在区域：</div>
            <select id="companyProvince"
                    class="h50 w100 bodgray mr10 p10"
                    name="companyProvince"
                    placeholder="浙江省/杭州市/西湖区">
            </select>
            <select id="companyCity"
                    class="h50 w100 bodgray mr10 p10"
                    name="companyCity"
                    placeholder="浙江省/杭州市/西湖区">
            </select>
          </div>
          <div class="mt25">
            <div class="dib w100 tr"><i class="red">*</i>意向代理服务：</div>
            <input id="personal-user"
                   type="radio"
                   value="1"
                   name="intentionalAgentService"
                   checked
                   class="vam">
            <label for="personal-user"
                   class="mr10"
                   class="vam">有翼新零售</label>
            <input id="company-user"
                   type="radio"
                   value="2"
                   name="intentionalAgentService"
                   class="vam">
            <label for="company-user"
                   class="vam">有翼新服务</label>
          </div>
          <div class="mt25 company-desc-panel">
            <div class="dib w100 tr"
                 style="vertical-align: top;">公司优势描述：</div>
            <div class="dib"
                 style="width: 327px;">
              <textarea name="companyAdvantage"
                        id="companyAdvantage"
                        cols="30"
                        rows="10"
                        maxlength="500"
                        placeholder="请描述公司规模、经营代理经验、客户资源等优势信息"
                        style="width:317px;"></textarea>
              <p class="words tr">0/500字</p>
              <div class="orange">提示：填写此项信息，更有利于您的申请顺利通过筛选</div>
            </div>

          </div>
        </div>
        <div class="add-shop-build tc mt20 mb20">
          <button type="submit"
                  class="primary-btn add-shop-btn w100"
                  style="height: 40px;">提交申请</button>
        </div>
      </form>
    </div>
    <div class="calc fr">
      <div style="margin-top: 180px;"
           class="agent-right pt40">
        <div class="pt40"
             style="padding-top: 40px;">您所填写的信息仅作为帐号开通、沟通联系所用。</div>
        <div style="margin-top:16px"> 申请提交后，我们会尽快进行筛选，请保持“联系人手机号”的畅通，以免错过合作机会。</div>
        <div style="margin-top:16px">我们期待有能力的团队加入！</div>
      </div>
    </div>

  </div>
</template>
