export default (element, vElement) => {
  [].slice.call(vElement.attributes)
    .forEach(({ name, value }) => {
      /^on[A-Z]/.test(name)
        ? element[name.toLowerCase()] = value
        : element.setAttribute(name, value)
    })
  return element
}
