$.ajaxSetup({
  contentType: 'application/x-www-form-urlencoded',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'content-type': 'application/x-www-form-urlencoded',
  },
  xhrFields: {
    withCredentials: true
  },
  dataFilter: function (response, type) {
    if (typeof response == 'string') {
      response = JSON.parse(response)
    }
    if (response.status == 999) {
      var locations = decodeURIComponent(response.location)
      var locationsArr = locations.split('?')
      locationsArr.shift()
      var connectSymbol = locationsArr.length > 1 ? '&backurl=' : '?backurl='

      var queryArr = locationsArr.map(function (item) {
        if (item.indexOf('service') > -1) {
          var arr = item.split('=')
          arr.shift()
          arr.join('=')
          return arr
        }
        return item
      })
      var query = 'service=' + encodeURIComponent(queryArr.join('?'))
      var backurl = encodeURIComponent(connectSymbol + encodeURIComponent(window.location.href))
      window.location.href = __ce.CASURL + '?' +
        query + backurl

      return response
    }
    return response
  },
  error: function (response) {
    console.log(new Error(response))
  }
})