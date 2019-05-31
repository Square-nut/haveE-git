<template>
  <div class="add-shop auto">
    <div clsas="add-shop-top mt50">
      <p class="f18 tc">有翼新零售-店铺创建</p>
    </div>
    <div clsas="add-shop-line"
         style="margin-top: 78px;">
      <p class="f16">选择店铺主营商品</p>
      <p class="f12 mt12 color999">预制模板，店铺创建成功后，直接启用该模板</p>
    </div>
    <div clsas="add-shop-line"
         style="margin-top: 10px;">
      <div class="shop-template fix">
      </div>
      <p style="color: #cb3718;"
         class="validate-template dn"></p>
    </div>
    <div clsas="mt50"
         style="margin-top: 50px">
      <p class="f16">店铺信息</p>
      <p class="f12 mt12 color999">开店之前，您需要提交店铺的基本资料信息</p>
      <div style="margin-top:20px;">
        <label for="">店铺名称：</label>
        <input id="shop-name"
               class="h30 w300 bodgray p10"
               type="text"
               placeholder="请输入店铺名称">
      </div>
      <p style="color: #cb3718;"
         class="validate-shop-name dn"></p>
      <div style="margin-top:24px;">
        <label for="">所属区域：</label>
        <select id="province"
                class="h50 w100 bodgray mr10 p10"
                name=""
                placeholder="浙江省/杭州市/西湖区">
        </select>
        <select id="city"
                class="h50 w100 bodgray mr10 p10"
                name=""
                placeholder="浙江省/杭州市/西湖区">
        </select>
        <!-- <select id="district" class="h50 w100 bodgray mr10 p10" name="" placeholder="浙江省/杭州市/西湖区">
                    </select> -->
        <input id="address"
               class="h30 w300 bodgray p10"
               type="text"
               placeholder="请输入详细地址">
      </div>
      <p style="color: #cb3718;"
         class="validate-addr dn"></p>
    </div>
    <!--<div clsas="add-shop-protocol tc" style="margin-top: 62px;border-top: 1px solid #d9d9d9;padding-top: 42px;">
                <div style="width: 210px;margin: auto;">
                    <input id="add-shop-protocol" type="checkbox">
                   <label for="add-shop-protocol">我已阅读并同意<a href="" class="primary-color">《有翼云服务协议》</a></label>
                </div>
                <p style="color: #cb3718;" class="validate-protocol dn tc"></p>

            </div>-->
    <div class="add-shop-build tc mt20">
      <button class="primary-btn add-shop-btn">创建店铺</button>
    </div>
  </div>
</template>
