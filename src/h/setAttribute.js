import * as r from 'ramda'

const setAttribute = (element, key, value) =>
  element.setAttribute(key, value)

export default r.curry(setAttribute)
