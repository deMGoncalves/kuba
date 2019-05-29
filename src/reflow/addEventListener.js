export default (element, vElement) =>
  (vElement.__events__ || []).forEach(
    (eventName) => (element[eventName] = vElement[eventName]))
