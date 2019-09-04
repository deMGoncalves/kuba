import curry from 'ramda/src/curry'

const setAttribute = (element, key, value) => {
  element.setAttribute(key, value)
  return element
}

export default curry(setAttribute)
