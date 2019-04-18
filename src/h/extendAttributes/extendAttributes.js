import * as r from 'ramda'
import isEvent from './isEvent'
import setEvent from './setEvent'
import setAttribute from './setAttribute'

const extendAttributes = (attributes, element) => {
  r.forEach(
    r.cond([
      [isEvent, setEvent(element)],
      [r.T, setAttribute(element)]
    ]),
    r.toPairs(attributes)
  )

  return element
}

export default r.curry(extendAttributes)
