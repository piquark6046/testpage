var XMLHttpRequestStatus = ''
var XMLHttpRequestResponseHeaders = ''
var XMLHttpRequestResponseHeaderContentLength = ''
var XMLHttpRequestResponseHeaderExpires = ''
var XMLHttpRequestResponseURL = ''

var GoogleAds = new XMLHttpRequest()
GoogleAds.open('GET', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
GoogleAds.onreadystatechange = function()
{
  XMLHttpRequestStatus = GoogleAds.status
  XMLHttpRequestResponseHeaders = GoogleAds.getAllResponseHeaders()
  XMLHttpRequestResponseHeaderContentLength = GoogleAds.getResponseHeader('content-length') ?? 'null'
  XMLHttpRequestResponseHeaderExpires = GoogleAds.getResponseHeader('expires') ?? 'null'
  XMLHttpRequestResponseURL = GoogleAds.responseURL

  new Array('XMLHttpRequestResponseURL', 'XMLHttpRequestStatus', 'XMLHttpRequestResponseHeaders', 'XMLHttpRequestResponseHeaderContentLength', 'XMLHttpRequestResponseHeaderExpires').forEach(function(e) {
    if (typeof document.querySelector('#' + e)['textContent'] !== undefined) {
      document.querySelector('#' + e).textContent = window[e]
    }
  })

  document.querySelector('#AdBlockCheck').textContent =
  !(XMLHttpRequestStatus === 200 && XMLHttpRequestResponseHeaderContentLength !== 'null' && XMLHttpRequestResponseHeaderExpires !== 'null')
}
GoogleAds.send()
