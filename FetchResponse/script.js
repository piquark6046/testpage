var Fetch = fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'GET' })
var ResponseOk = ''
var ResponseRedirected = ''
var ResponseType = ''
var ResponseURL = ''
var ResponseHeaders = ''
var ResponseStatus = -1
var ResponseStatusText = ''

Fetch.then(function(response) {
  ResponseOk = response.ok
  ResponseRedirected = response.redirected
  ResponseType = response.type
  ResponseURL = response.url
  ResponseHeaders = response.headers
  ResponseStatus = response.status
  ResponseStatusText = response.statusText

  new Array('ResponseOk', 'ResponseRedirected', 'ResponseType', 'ResponseURL', 'ResponseStatus', 'ResponseStatusText').forEach(function(e) {
    document.querySelector('#' + e).textContent = window[e]
  })

  for (var e of ResponseHeaders.keys()) {
    document.querySelector('#ResponseHeaders').textContent += e + ': ' + ResponseHeaders.get(e) + '\n'
  }

  document.querySelector('#AdBlockCheckNoFingerprinting').textContent = !(
    ResponseOk && !ResponseRedirected && ResponseHeaders.get('content-length') && ResponseHeaders.get('expires') &&
    ResponseStatus === 200 && ResponseStatusText === 'OK'
  )
  document.querySelector('#AdBlockCheck').textContent = !(
    ResponseOk && !ResponseRedirected && ResponseHeaders.get('content-length') && ResponseHeaders.get('expires') &&
    ResponseStatus === 200 && ResponseStatusText === 'OK' &&
    ResponseURL === 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
  )
})
.catch(function() {
  new Array('AdBlockCheckNoFingerprinting', 'AdBlockCheck').forEach(function(e) {
    document.querySelector('#' + e).textContent = 'true'
  })
})