import curry from 'ramda/src/curry'

const setAttribute = (element, key, value) =>
  element.setAttribute(key, value)

export default curry(setAttribute)
