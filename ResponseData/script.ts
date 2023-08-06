var Fetch = fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', { method: 'GET' })
var FetchConstructorName = ''
var FetchText = false
var FetchEqual = false
var FetchResponse:Response

Fetch.then(async function (response) {
  FetchResponse = response.clone()
  let FetchConstructorNameCloned = response.clone()
  if (FetchConstructorNameCloned.body !== null) {
    FetchConstructorName = typeof FetchConstructorNameCloned.body.constructor.name === 'undefined' ? 'undefined' : FetchConstructorNameCloned.body.constructor.name
  } else {
    FetchConstructorName = 'null'
  }
  try {
    FetchText = typeof await response.clone().text() === 'string' ? true : false
  }
  catch (error) {
    FetchText = false
  }
  if (response.body !== null) {
    let Reader = await response.body.getReader().read()
    if (Reader.value) {
      FetchEqual = Reader.value ? true : false
    }
  }

  new Array('FetchConstructorName', 'FetchText', 'FetchEqual').forEach(function (item) {
    let element = document.querySelector(`td#${item}`) 
    if (element !== null) {
      element.innerHTML = window[item].toString()
    }
  })
  let element = document.querySelector('td#FetchAdBlockCheck')
  if (element !== null) {
    element.innerHTML = (!(FetchConstructorName === 'ReadableStream' && FetchText && FetchEqual)).toString()
  }
}).catch(function() {
  let FetchAdBlockCheck = document.querySelector('td#FetchAdBlockCheck')
  if (FetchAdBlockCheck !== null) {
    FetchAdBlockCheck.innerHTML = 'true'
  }
})

var xmlHttpRequest = new XMLHttpRequest()

xmlHttpRequest.open('GET', 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js')
xmlHttpRequest.onreadystatechange = function () {
  let XHRResponseText = typeof xmlHttpRequest.responseText
  let XHRResponse = typeof xmlHttpRequest.response
  let XHREqual = xmlHttpRequest.response === xmlHttpRequest.responseText
  document.querySelector('td#XHRResponseText').innerHTML = XHRResponseText
  document.querySelector('td#XHRResponse').innerHTML = XHRResponse
  document.querySelector('td#XHREqual').innerHTML = (XHREqual).toString()
  document.querySelector('td#XHRAdBlockCheck').innerHTML = (!(XHRResponse === 'string' && XHRResponseText === 'string' && XHREqual && xmlHttpRequest.responseURL)).toString()
}
xmlHttpRequest.send()