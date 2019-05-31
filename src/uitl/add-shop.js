  $(function () {
    var $addShop = $('.add-shop'),
      $addResult = $(".add-shop-result"),
      $success = $('.result-success'),
      $fail = $('.result-fail');
    $(document).on("click", ".add-shop-btn", function () {
      if (validate()) {
        var postData = {
          source: '6',
          goodsGroupId: '',
          omoProduces: {
            mainCommodity: $(".shop-template-radio:checked").val(),
            shopName: $("#shop-name").val(),
            country: '',
            province: $("#province").val(),
            city: $("#city").val(),
            district: '',
            address: $("#address").val()
          },
          orderDeatil: [{
            skuId: queryObj.skuId,
            timeFlag: '',
            NUM: 1,
            LANGUAGE: 'zh-CN',
            TIME_LONG: 1,
            operSource: '1',
            businessType: '10'
          }]
        }
        $.post(__ce.shopURL + '/order/savecommonorders', {
          data: JSON.stringify(postData)
        }, function (response) {
          if (response) {
            if (response.data && response.data.buyStatus == '1') {
              $success.addClass('dn')
              $fail.removeClass('dn')
            } else {
              $fail.addClass('dn')
              $success.removeClass('dn')
            }
            $addShop.addClass('dn')
            $addResult.removeClass('dn')
          }
        })
      }
    })
    $(document).on("change", "#province", function () {
      var citys = [],
        _t = $(this);
      cityList.forEach(function (ele) {
        if (ele.value == _t.val()) {
          citys = ele.children
        }
      })
      initSelect("#city", citys)
    })
    $(document).on("change", "#city", function () {
      var citys = [],
        _t = $(this)
      cityList.forEach(function (ele) {
        if (ele.value == _t.val()) {
          citys = ele.children
        }
      })
      initSelect("#district", citys)
    })
    getTemplate()
    initSelect("#province", cityList)
  })

  var queryObj = getUrlPrmt()

  function initSelect(selector, data) {
    var html = ''
    var $selector = $(selector)
    data.forEach(function (ele) {
      html += '<option value="' + ele.value + '">' + ele.label + '</option>'
    })
    $selector.val = ''
    $selector.html(html)
    if (selector == '#province') {
      var citys = []
      cityList.forEach(function (ele) {
        if (ele.value == data[0].value) {
          citys = ele.children
        }
      })
      initSelect("#city", citys)
    }
  }

  function getTemplate() {
    var res = ''
    $.get(__ce.shopURL +
      '/security/dictionary/getDictItemListByParentCode', {
        dictItemParentCode: queryObj.dictItemParentCode
      },
      function (response) {
        if (response && Array.isArray(response.data.dictionaryItemVOList)) {
          var html = ''
          res = response.data.dictionaryItemVOList
          res.forEach(function (ele) {
            html +=
              '<input class="shop-template-radio" type="radio" name="shop-template" id="' +
              ele.id + '" value="' + ele.id +
              '"><label class="shop-template-label tc f14 color999 fl mr12" for="' +
              ele.id +
              '">' + ele.name + '</label>'
          })
          $(".shop-template").html(html)
        }
      }

    )
  }

  function getUrlPrmt(url) {

    url = url ? url : window.location.href;

    let _pa = url.substring(url.indexOf('?') + 1),
      _arrS = _pa.split('&'),
      _rs = {};

    for (let i = 0, _len = _arrS.length; i < _len; i++) {

      let pos = _arrS[i].indexOf('=');

      if (pos == -1) {

        continue;

      }

      let name = _arrS[i].substring(0, pos),
        value = window.decodeURIComponent(_arrS[i].substring(pos + 1));

      _rs[name] = value;

    }

    return _rs;

  }

  function validate() {
    // 校验模板
    if (!$(".shop-template-radio:checked").val()) {
      $(".validate-template").removeClass('dn')
      return false
    } else {
      $(".validate-template").addClass('dn')
    }
    // 校验店铺
    if ($("#shop-name").val() == '') {
      $(".validate-shop-name").removeClass('dn')
      return false
    } else {
      $(".validate-shop-name").addClass('dn')

    }
    if ($("#province").val() == '') {
      $(".validate-addr").removeClass('dn')
      $(".validate-addr").text("请选择省份")
      return false
    } else {
      $(".validate-addr").addClass('dn')

    }
    if ($("#address").val() == '') {
      $(".validate-addr").removeClass('dn')
      $(".validate-addr").text("请选择市")
      return false
    } else {
      $(".validate-addr").addClass('dn')
    }
    // if (!$("#add-shop-protocol:checked").val()) {
    //   $(".validate-protocol").text("请同意《有翼云服务协议》")
    //   $(".validate-protocol").removeClass('dn')
    //   return false
    // } else {
    //   $(".validate-protocol").addClass('dn')
    // }
    return true
  }
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  $(".banner").hover(function () {
    $(".no-visual").show();
  }, function () {
    $(".no-visual").hide();
  })