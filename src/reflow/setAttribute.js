export default (element, vElement) =>
  [].slice.call(vElement.attributes).forEach(
    ({ name, value }) => /value/.test(name)
      ? (element[name] = value)
      : element.setAttribute(name, value))
