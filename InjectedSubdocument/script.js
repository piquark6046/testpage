var IframeBase = document.querySelector('#iframe-base')
var Iframe1 = document.createElement('iframe')
Iframe1.src = 'about:blank'
var Iframe2 = document.createElement('iframe')
Iframe2.src = 'about:blank'

IframeBase.append(Iframe1, Iframe2)
Iframe1.contentDocument.open()
Iframe2.contentDocument.open()
Iframe1.contentDocument.close()
Iframe2.contentDocument.close()
Iframe1.contentDocument.innerHTML = ''
Iframe2.contentDocument.innerHTML = ''

var IframeImageAG = Iframe1.contentDocument.createElement('img')
var IframeImageuBO = Iframe2.contentDocument.createElement('img')
Iframe1.contentDocument.body.append(IframeImageAG)
Iframe2.contentDocument.body.append(IframeImageuBO)

IframeImageAG.src = 'https://avatars.githubusercontent.com/u/8361145?s=200&v=4'
IframeImageAG.id = 'IframeAdGuardLogo'
IframeImageAG.width = '100'
IframeImageAG.height = '100'

IframeImageuBO.src = 'https://avatars.githubusercontent.com/u/18120975?s=200&v=4'
IframeImageuBO.id = 'IframeuBOLogo'
IframeImageuBO.width = '100'
IframeImageuBO.height = '100'