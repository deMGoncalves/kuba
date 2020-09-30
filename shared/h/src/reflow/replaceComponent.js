import frame from '@rex/h/src/frame'

export default (element, vElement, parent) =>
  frame(() => parent.replaceChild(vElement.__target__.__element__, element))
