export default (element) =>
  (element.__events__ || []).forEach(
    (eventName) => element[eventName] = undefined)
