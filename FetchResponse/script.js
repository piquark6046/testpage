var Fetch = fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'GET' })
var ResponseOk = ''
var ResponseRedirected = ''
var ResponseType = ''
var ResponseURL = ''
var ResponseHeaders = ''
var ReSponseStatus = ''
var ReSponseStatusText = ''

Fetch.then(function(response) {
  ResponseOk = response.ok
  ResponseRedirected = response.redirected
  ResponseType = response.type
  ResponseURL = response.url
  ResponseHeaders = response.headers
  ReSponseStatus = response.status
  ReSponseStatusText = response.statusText

  new Array('ResponseOk', 'ResponseRedirected', 'ResponseType', 'ResponseURL', 'ReSponseStatus', 'ReSponseStatusText').forEach(function(e) {
    document.querySelector('#' + e).textContent = window[e]
  })

  for (var e of ResponseHeaders.keys()) {
    document.querySelector('#ResponseHeaders').textContent += e + ': ' + ResponseHeaders.get(e) + '\n'
  }

  document.querySelector('#AdBlockCheckNoFingerprinting').textContent = !(
    ResponseOk && !ResponseRedirected && ResponseHeaders.get('content-length') && ResponseHeaders.get('expires')
  )
  document.querySelector('#AdBlockCheck').textContent = !(
    ResponseOk && !ResponseRedirected && ResponseHeaders.get('content-length') && ResponseHeaders.get('expires') &&
    ResponseURL === 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  )
})
.catch(function() {
  new Array('AdBlockCheckNoFingerprinting', 'AdBlockCheck').forEach(function(e) {
    document.querySelector('#' + e).textContent = 'true'
  })
})