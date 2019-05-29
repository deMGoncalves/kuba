export default (element, vElement) => {
  (element.__events__ || []).forEach((eventName) => { element[eventName] = undefined });
  (vElement.__events__ || []).forEach((eventName) => { element[eventName] = vElement[eventName] });
  [].slice.call(vElement.attributes).forEach(({ name, value }) => element.setAttribute(name, value))
  return element
}
