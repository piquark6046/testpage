var AdblockTotal = null
var XMLHttpRequestStatus = null
var XMLHttpRequestResponseHeaders = null
var XMLHttpRequestResponseHeaderContentLength = null
var XMLHttpRequestResponseHeaderExpires = null

var GoogleAds = new XMLHttpRequest()
GoogleAds.open('POST', 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', true)
GoogleAds.setRequestHeader('Content-Type', 'GoogleAds')
GoogleAds.onreadystatechange = function()
{
  XMLHttpRequestStatus = GoogleAds.status
  XMLHttpRequestResponseHeaders = GoogleAds.getAllResponseHeaders()
  XMLHttpRequestResponseHeaderContentLength = GoogleAds.getResponseHeader('content-length')
  XMLHttpRequestResponseHeaderExpires = GoogleAds.getResponseHeader('expires')
}

[XMLHttpRequestStatus, XMLHttpRequestResponseHeaders, XMLHttpRequestResponseHeaderContentLength, XMLHttpRequestResponseHeaderExpires].forEach(function(e) {
  document.querySelector(e).textContent = e
})