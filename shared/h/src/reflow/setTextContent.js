import frame  from '@rex/h/src/frame'

export default (element, vElement) =>
  frame(() => (element.textContent = vElement.textContent))
