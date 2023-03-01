var XMLHttpRequestStatus = ''
var XMLHttpRequestResponseHeaders = ''
var XMLHttpRequestResponseHeaderContentLength = ''
var XMLHttpRequestResponseHeaderExpires = ''

var GoogleAds = new XMLHttpRequest()
GoogleAds.open('GET', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
GoogleAds.onreadystatechange = function()
{
  XMLHttpRequestStatus = GoogleAds.status
  XMLHttpRequestResponseHeaders = GoogleAds.getAllResponseHeaders()
  XMLHttpRequestResponseHeaderContentLength = GoogleAds.getResponseHeader('content-length') ?? 'null'
  XMLHttpRequestResponseHeaderExpires = GoogleAds.getResponseHeader('expires') ?? 'null'

  new Array('XMLHttpRequestStatus', 'XMLHttpRequestResponseHeaders', 'XMLHttpRequestResponseHeaderContentLength', 'XMLHttpRequestResponseHeaderExpires').forEach(function(e) {
    if (typeof document.querySelector('#' + e)['textContent'] !== undefined) {
      document.querySelector('#' + e).textContent = window[e]
    }
  })
}
GoogleAds.send()
