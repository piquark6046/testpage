var IframeBase = document.querySelector('#iframe-base')
var Iframe1 = document.createElement('iframe')
Iframe1.src = 'about:blank'
Iframe1.contentDocument.open()
var Iframe2 = document.createElement('iframe')
Iframe2.src = 'about:blank'
Iframe2.contentDocument.open()

IframeBase.append(Iframe1, Iframe2)

var IframeImageAG = Iframe1.contentDocument.createElement('img')
var IframeImageuBO = Iframe2.contentDocument.createElement('img')
Iframe1.contentWindow.document.body.append(IframeImageAG)
Iframe2.contentWindow.document.body.append(IframeImageuBO)

IframeImageAG.src = 'https://avatars.githubusercontent.com/u/8361145?s=200&v=4'
IframeImageAG.id = 'IframeAdGuardLogo'
IframeImageAG.width = '100'
IframeImageAG.height = '100'

IframeImageuBO.src = 'https://avatars.githubusercontent.com/u/18120975?s=200&v=4'
IframeImageuBO.id = 'IframeuBOLogo'
IframeImageuBO.width = '100'
IframeImageuBO.height = '100'