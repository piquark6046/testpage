const IframeBase = document.querySelector('#iframe-base')
const Iframe1 = document.createElement('iframe')
Iframe1.src = 'about:blank'
const Iframe2 = document.createElement('iframe')
Iframe2.src = 'about:blank'

const IframeImageAG = Iframe1.contentWindow.document.createElement('img')
IframeImageAG.src = 'https://avatars.githubusercontent.com/u/8361145?s=200&v=4'
IframeImageAG.id = 'IframeAdGuardLogo'
IframeImageAG.width = '100'
IframeImageAG.height = '100'

const IframeImageuBO = Iframe2.contentWindow.document.createElement('img')
IframeImageuBO.src = 'https://avatars.githubusercontent.com/u/18120975?s=200&v=4'
IframeImageuBO.id = 'IframeuBOLogo'
IframeImageuBO.width = '100'
IframeImageuBO.height = '100'

IframeBase.append(Iframe1, Iframe2)