import frame  from '@rex/h/src/frame'

const setTextContent = (element, vElement) =>
  (element.textContent = vElement.textContent)

export default frame(setTextContent)
