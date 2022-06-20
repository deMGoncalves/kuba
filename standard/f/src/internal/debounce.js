const debounce = (target, wait = 250, timeoutID) =>
  (...args) => (
    (timeoutID = clearTimeout(timeoutID)),
    (timeoutID = setTimeout(() => target(...args), wait))
  )

export default debounce
