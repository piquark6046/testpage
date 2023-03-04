var Fetch = fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'GET' })
var ResponseOk = ''
var ResponseRedirected = ''
var ResponseType = ''
var ResponseURL = ''
var ResponseHeaders = ''

Fetch.then(function(response) {
  ResponseOk = response.ok
  ResponseRedirected = response.redirected
  ResponseType = response.type
  ResponseURL = response.url
  ResponseHeaders = response.headers

  new Array('ResponseOk', 'ResponseRedirected', 'ResponseType', 'ResponseURL').forEach(function(e) {
    document.querySelector('#' + e).textContent = window[e]
  })

  for (var e of ResponseHeaders.keys()) {
    document.querySelector('#ResponseHeaders').textContent += e + ': ' + ResponseHeaders.get(e) + '\n'
  }
})
.catch(function() {
  new Array('AdBlockCheckNoFingerprinting', 'AdBlockCheck').forEach(function(e) {
    document.querySelector('#' + e).textContent = 'true'
  })
})