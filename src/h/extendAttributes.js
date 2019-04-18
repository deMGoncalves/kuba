import * as r from 'ramda'
import addEventListener from './addEventListener'
import setAttribute from './setAttribute'

const extendAttributes = r.curry((element, args) =>
  r.cond([
    [r.test(/^on[A-Z]/), addEventListener(element)],
    [r.T, setAttribute(element)]
  ])(...args))

export default r.curry((attributes, element) => {
  r.forEach(extendAttributes(element), r.toPairs(attributes))
  return element
})
