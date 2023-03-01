var AdblockTotal = ''
var XMLHttpRequestStatus = ''
var XMLHttpRequestResponseHeaders = ''
var XMLHttpRequestResponseHeaderContentLength = ''
var XMLHttpRequestResponseHeaderExpires = ''

var GoogleAds = new XMLHttpRequest()
GoogleAds.open('POST', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
GoogleAds.setRequestHeader('Content-Type', 'GoogleAds')
GoogleAds.onreadystatechange = function()
{
  XMLHttpRequestStatus = GoogleAds.status
  XMLHttpRequestResponseHeaders = GoogleAds.getAllResponseHeaders()
  XMLHttpRequestResponseHeaderContentLength = GoogleAds.getResponseHeader('content-length')
  XMLHttpRequestResponseHeaderExpires = GoogleAds.getResponseHeader('expires')

  [XMLHttpRequestStatus, XMLHttpRequestResponseHeaders, XMLHttpRequestResponseHeaderContentLength, XMLHttpRequestResponseHeaderExpires].forEach(function(e) {
    if (typeof document.querySelector(e)['textContent'] !== undefined) {
      document.querySelector(e).textContent = e
    }
  })
}
GoogleAds.send()
