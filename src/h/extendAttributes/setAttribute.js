import * as r from 'ramda'

const setAttribute = (key, value, target) =>
  target.setAttribute(key, value)

export default r.curry((element, [key, value]) =>
  setAttribute(key, value, element))
