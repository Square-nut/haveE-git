  $(function () {
    $(document).on("input", "#companyAdvantage", function (params) {
      $(".words").text($(this).val().length + '/500')
    })
    $(document).on("blur", "#companyAdvantage", function (params) {
      $(this).val($(this).val().substring(0, 500))
      $(".words").text($(this).val().length + '/500')
    })
    $(document).on("click", ".add-shop-btn", function () {
      $("#agent-form").validate({
        rules: {
          companyName: "required",
          companyContact: "required",
          contactMobile: {
            required: true,
            minlength: 11,
            maxlength: 11,
            digits: true
          },
        },
        submitHandler: function (form) {
          var postData = {
            companyName: $("#companyName").val(),
            companyContact: $("#companyContact").val(),
            contactMobile: $("#contactMobile").val(),
            companyProvince: $("#companyProvince").val(),
            companyDistrict: '',
            companyCity: $("#companyCity").val(),
            intentionalAgentService: $("[name='intentionalAgentService']:checked").val(),
            companyAdvantage: $("#companyAdvantage").val()
          }
          $.get(__ce.baseURL + '/api-portal/franchisee/addjoinapplication', postData, function (response) {

            if (response.status == '101') {
              $('.agent').addClass('dn')
              $(".add-agent-result").removeClass('dn')
            } else {
              alert(response.msg)
              console.log(response.msg)
            }
          })
        }
      });
    })
    $(document).on("change", "#companyProvince", function () {
      var citys = [],
        _t = $(this);
      cityList.forEach(function (ele) {
        if (ele.value == _t.val()) {
          citys = ele.children
        }
      })
      initSelect("#companyCity", citys)
    })
    $(document).on("change", "#companyCity", function () {
      var citys = [],
        _t = $(this)
      cityList.forEach(function (ele) {
        if (ele.value == _t.val()) {
          citys = ele.children
        }
      })
      initSelect("#district", citys)
    })
    initSelect("#companyProvince", cityList)
  })

  function initSelect(selector, data) {
    var html = ''
    var $selector = $(selector)
    data.forEach(function (ele) {
      html += '<option value="' + ele.value + '">' + ele.label + '</option>'
    })
    $selector.val = ''
    $selector.html(html)
    if (selector == '#companyProvince') {
      var citys = []
      cityList.forEach(function (ele) {
        if (ele.value == data[0].value) {
          citys = ele.children
        }
      })
      initSelect("#companyCity", citys)
    }
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