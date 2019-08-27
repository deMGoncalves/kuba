import cond from 'ramda/src/cond'
import curry from 'ramda/src/curry'
import forEach from 'ramda/src/forEach'
import toPairs from 'ramda/src/toPairs'
import test from 'ramda/src/test'
import T from 'ramda/src/T'
import addEventListener from './addEventListener'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'

const extendAttributes = curry((element, args) =>
  cond([
    [test(/^on[A-Z][a-z]+$/), addEventListener(element)],
    [test(/^on[A-Z][a-z]+_stop$/), addEventListenerWithStop(element)],
    [test(/^on[A-Z][a-z]+_prevent$/), addEventListenerWithPrevent(element)],
    [test(/^on[A-Z][a-z]+_(stop|prevent)_(stop|prevent)$/), addEventListenerWithStopAndPrevent(element)],
    [test(/^className$/), setClassName(element)],
    [T, setAttribute(element)]
  ])(...args))

export default curry((attributes, element) => {
  forEach(extendAttributes(element), toPairs(attributes))
  return element
})
