import frame from '@rex/h/src/frame'

const appendChild = (_, vElement, parent) =>
  parent.appendChild(vElement)

export default frame(appendChild)
