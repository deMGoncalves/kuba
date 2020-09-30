import frame from '@rex/h/src/frame'

const replaceChild = (element, vElement, parent) =>
  parent.replaceChild(vElement, element)

export default frame(replaceChild)
