import cond from 'ramda/src/cond'
import curry from 'ramda/src/curry'
import forEach from 'ramda/src/forEach'
import toPairs from 'ramda/src/toPairs'
import test from 'ramda/src/test'
import T from 'ramda/src/T'
import addEventListener from './addEventListener'
import setAttribute from './setAttribute'

const extendAttributes = curry((element, args) =>
  cond([
    [test(/^on[A-Z]/), addEventListener(element)],
    [T, setAttribute(element)]
  ])(...args))

export default curry((attributes, element) => {
  forEach(extendAttributes(element), toPairs(attributes))
  return element
})
