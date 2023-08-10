const XMLHttpRequestURL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
const XMLHttpRequestMethod = 'GET'

var XMLHttpRequestInstance = new XMLHttpRequest()

XMLHttpRequestInstance.open(XMLHttpRequestMethod, XMLHttpRequestURL)
XMLHttpRequestInstance.onloadend = function () {
  let XHRResponseText = XMLHttpRequestInstance.responseText
  let XHRResponseURL = XMLHttpRequestInstance.responseURL
  let XHRResponseAdsbygoogle = (['google-adsense', 'googlesyndication'].some(function (item) { return XHRResponseText.includes(item) }))
  document.querySelector('td#XHRResponseText').innerHTML = typeof XHRResponseText
  document.querySelector('td#XHRResponseURLEmpty').innerHTML = XHRResponseURL === '' ? 'true' : 'false'
  document.querySelector('td#XHRResponseTextLength').innerHTML = XHRResponseText.length.toString()
  document.querySelector('td#XHRResponseAdsbygoogle').innerHTML = XHRResponseAdsbygoogle.toString()
  document.querySelector('td#XHRAdBlockCheck').innerHTML =
  (!(typeof XHRResponseText === 'string' && XHRResponseURL && XHRResponseText && XHRResponseAdsbygoogle)).toString()
}
XMLHttpRequestInstance.send()