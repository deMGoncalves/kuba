export default (element, vElement) =>
  [].slice.call(vElement.attributes).forEach(
    ({ name, value }) => element.setAttribute(name, value))
