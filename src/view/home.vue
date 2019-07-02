<template>
  <div>
    <!--header-->
    <Nav-bar></Nav-bar>
    <!--header/-->
    <!--banner-->
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide-1">
            <div class="swiper-bg"
                 style="background-image:url('/static/assets/banner_01.png')"></div>
            <div class="content-wrapper">
              <h3>有翼 新零售</h3>
              <p class="font-lighter">线上零售行业品牌电商、门店零售行业解决方案</p>
              <a class="button primary try-free-wsc"
                 href="/add-shop.html?dictItemParentCode=NRetail_Shop&skuId=B4C95698100A435C9B747E58CCF14FFE">免费试用</a>
              <small class="font-lighter">或致电 010 - 1234 5678</small>
            </div>
          </div>
          <div class="swiper-slide slide-2">
            <div class="swiper-bg"
                 style="background-image:url('/static/assets/banner_02.png')"></div>
            <div class="content-wrapper">
              <h3>有翼新服务</h3>
              <p class="font-lighter x-title-bn">
                <span>服务于广大实体行业，提供客户沉淀、提升复购、</span><br><span>低成本拓客的线下门店解决方案</span>
              </p>
              <a class="button primary try-free-linshou"
                 href="/add-shop.html?dictItemParentCode=NSever_GEN&skuId=32C3F7EF28264A1A88607F357D880B19">免费试用</a>
              <small class="font-lighter">或致电 010 - 1234 5678</small>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-container no-visual">
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
    </div>
    <!-- <div class="banner">
      <el-carousel trigger="click"
                   class=""
                   height="150px">
        <el-carousel-item v-for="item in swiperList"
                          :key="item.id">
          <div class="swiper-slide slide-1"
               :style="`background-image:url(${item.bgURL})`">
            <div class="content-wrapper">
              <h3>{{item.name}}</h3>
              <p class="font-lighter"
                 v-html="item.desc"></p>
              <a class="button primary try-free-wsc"
                 to="">免费试用</a>
              <small class="font-lighter">或致电 010 - 1234 5678</small>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div> -->
    <!--banner/-->
    <!--商业模式-->
    <div class="model-con">
      <div class="wrapper">
        <h3>
          <p>线上——移动——线下</p>
          <p>三位一体全时空的体验店营销系统</p>
        </h3>
        <img src="/static/assets/omo_online.png">
      </div>
    </div>
    <!--商业模式/-->
    <!--需求-->
    <div class="demand-con">
      <div class="wrapper">
        <h3>基于商家的智能化升级改造</h3>
      </div>
      <div class="demand-four">
        <div class="wrapper">
          <ul>
            <li>
              <img src="/static/assets/demand_01.png">
              <h6>智能化需求</h6>
              <p>传统商家的低成本</p>
              <p>互联网移动化升级</p>
            </li>
            <li>
              <img src="/static/assets/demand_02.png">
              <h6>沉淀客户需求</h6>
              <p>促进客户持续购买力</p>
              <p>和扩大客户群体需求</p>
            </li>
            <li>
              <img src="/static/assets/demand_03.png">
              <h6>降低成本需求</h6>
              <p>多门店管理、收款、</p>
              <p>提高效率需求</p>
            </li>
            <li>
              <img src="/static/assets/demand_04.png">
              <h6>集中管理需求</h6>
              <p>集中管理需求</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper">
        <div class="try-bt">
          <a href="">免费试用</a>
        </div>
      </div>
    </div>
    <!--需求/-->
    <!--解决方案-->
    <div class="solution-con">
      <div class="wrapper">
        <a href=""><img src="/static/assets/omo_project1.png"></a>
        <a href=""
           class="ml-8"><img src="/static/assets/omo_project2.png"></a>
      </div>
    </div>
    <!--解决方案/-->
    <!--行业-->
    <div class="industry-con">
      <div class="wrapper">
        <h3>解决方案适合多种行业场景</h3>
        <div class="industry-list">
          <a href=""
             class="industry-01"></a>
          <a href=""
             class="industry-02"></a>
          <a href=""
             class="industry-03"></a>
          <a href=""
             class="industry-04"></a>
          <a href=""
             class="industry-05"></a>
          <a href=""
             class="industry-06"></a>
          <a href=""
             class="industry-07"></a>
          <a href=""
             class="industry-08"></a>
          <a href=""
             class="industry-09"></a>
          <a href=""
             class="industry-10"></a>
          <a href=""
             class="industry-11"></a>
          <a href=""
             class="industry-12"></a>
        </div>
        <div class="industry-bt clearfix">
          <a href=""
             class="industry-more">了解更多</a>
          <a href=""
             class="industry-try">免费试用</a>
        </div>
      </div>
    </div>
    <!--行业/-->
    <!--服务体系-->
    <div class="all-con">
      <div class="wrapper">
        <h3>全方位服务体系支撑</h3>
        <ul>
          <li>
            <img src="/static/assets/omo_service1.png">
            <h5>客服中心</h5>
            <p>7*12小时专属人工在线客服提供全方位客户支持</p>
          </li>
          <li>
            <img src="/static/assets/omo_service2.png">
            <h5>培训中心</h5>
            <p>每周1次线上、线下培训手把手教会使用产品</p>
          </li>
          <li>
            <img src="/static/assets/omo_service3.png">
            <h5>运营分享</h5>
            <p>每月实操运营案例、运营经验分享</p>
          </li>
          <li>
            <img src="/static/assets/omo_service4.png">
            <h5>企业论坛</h5>
            <p>企业信息交互，使用产品反馈运营操作分享</p>
          </li>
          <li>
            <img src="/static/assets/omo_service5.png">
            <h5>本地服务</h5>
            <p>全国72家直营分公司本地化服务</p>
          </li>
          <li>
            <img src="/static/assets/omo_service6.png">
            <h5>搭建指导</h5>
            <p>为个性化建立自有平台，提供技术支持</p>
          </li>
        </ul>
      </div>
    </div>
    <!--服务体系/-->
    <!--生态链-->
    <div class="shengtailian">
      <div class="wrapper">
        <h3>助力打造自有生态链</h3>
        <strong>向智慧商业转型升级提供有价值的服务</strong>
        <ul class="num-container">
          <li>
            <p class="num"><span class="data">120</span>万+</p>
            <p>颠覆企业</p>
          </li>
          <li>
            <p class="num"><span class="data">80+</span></p>
            <p>全国分公司</p>
          </li>
          <li>
            <p class="num"><span class="data">20</span>年</p>
            <p>行业经验</p>
          </li>
          <li>
            <p class="num"><span class="data">300</span>亿</p>
            <p>电商交易额</p>
          </li>
          <li>
            <p class="num"><span class="data">5</span>万/秒</p>
            <p>订单处理速度</p>
          </li>
        </ul>
      </div>
    </div>
    <!--生态链/-->
    <!--立即注册-->
    <div class="line-reg">
      <div class="wrapper">
        <p>立即注册即可免费试用</p>
        <a href="/register.html">立即注册</a>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from './components/nav-bar'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      swiperList: [{
        id: 'swiper1',
        name: '有翼 新零售',
        bgURL: '/static/assets/banner_01.png',
        desc: '线上零售行业品牌电商、门店零售行业解决方案',
        url: '/add-shop?dictItemParentCode=NRetail_Shop&skuId=B4C95698100A435C9B747E58CCF14FFE'
      }, {
        id: 'swiper2',
        name: '有翼新服务',
        bgURL: '/static/assets/banner_02.png',
        desc: '<span>服务于广大实体行业，提供客户沉淀、提升复购、</span><br><span>低成本拓客的线下门店解决方案</span>',
        url: '/add-shop?dictItemParentCode=NSever_GEN&skuId=32C3F7EF28264A1A88607F357D880B19'
      }
      ]
    }
  }
}
</script>
<style scoped>
/*swiper*/

.swiper-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50%;
}

.content-wrapper {
  width: 1200px;
  height: 100%;
  margin: auto;
}
h3 {
  font-size: 44px;
  margin: 0 0 7px;
  line-height: 62px;
}

.swiper-container .slide-1 h3 {
  color: #0191dc;
}

.swiper-container .slide-1 p {
  font-size: 22px;
  color: #3c3c3c;
  margin-bottom: 55px;
}

.swiper-container a.button {
  width: 192px;
  height: 46px;
  line-height: 18px;
  display: inline-block;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.swiper-container a.try-free-wsc {
  line-height: 24px;
}

a.primary {
  background: url(/static/assets/s_01.png);
  padding: 12px 42px;
  color: #fff;
}

a:hover.primary {
  background: url(/static/assets/s_02.png);
}

a.button {
  font-size: 18px;
  padding: 12px 22px;
  text-decoration: none;
  border-radius: 2px;
}

.swiper-container .slide-1 small {
  font-size: 14px;
  color: #7e7e7e;
  margin-top: 15px;
  display: block;
}

.swiper-container .slide-2 h3 {
  color: #fff;
}

.swiper-container .slide-2 p {
  font-size: 22px;
  color: #d5ecf9;
  line-height: 32px;
  margin-bottom: 55px;
}

.swiper-container .slide-2 small {
  font-size: 14px;
  color: #d5ecf9;
  margin-top: 15px;
  display: block;
}

.swiper-container a.try-free-linshou {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 2px;
  line-height: 18px;
}

.swiper-container a:hover.try-free-linshou {
  background: #ffffff;
  color: #0099cc;
}

.banner .swiper-pagination-bullet {
  width: 60px;
  height: 4px;
  display: inline-block;
  border-radius: initial;
  background: #b5b5b5;
  opacity: 1;
}

.banner .swiper-pagination-bullet-active {
  opacity: 1;
  background: #fff;
}

.banner .swiper-container .swiper-button-container {
  width: 1200px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.banner .swiper-button-next,
.banner .swiper-button-prev {
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: 50%;
  background-repeat: no-repeat;
}

.banner .swiper-container .swiper-button-next {
  right: 1220px;
  left: auto;
  width: 55px;
  height: 55px;
  background-size: 100% 100%;
  background-image: url(/static/assets/lt.png);
}

.banner .swiper-container .swiper-button-prev {
  left: 1220px;
  right: auto;
  width: 55px;
  height: 55px;
  background-size: 100% 100%;
  background-image: url(/static/assets/rt.png);
}
</style>
