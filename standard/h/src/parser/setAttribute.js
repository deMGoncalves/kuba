const setAttribute = (target, key, value) => (
  value
    ? target.element.setAttribute(key, value)
    : target.element.removeAttribute(key)
)

export default setAttribute
