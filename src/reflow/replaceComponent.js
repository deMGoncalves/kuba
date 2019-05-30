export default (element, vElement, parent) =>
  parent.replaceChild(vElement.__target__.__element__, element)
