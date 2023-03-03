var Fetch = fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'GET' })
var ResponseOk = null
var ResponseRedirected = null
var ResponseType = null
var ResponseURL = null
var ResponseHeaders = null

Fetch.then(function(response) {
  ResponseOk = response.ok
  ResponseRedirected = response.redirected
  ResponseType = response.type
  ResponseURL = response.url
  ResponseHeaders = response.headers
})
.catch(function() {
  document.querySelector('#AdBlockCheck').textContent = 'true'
})