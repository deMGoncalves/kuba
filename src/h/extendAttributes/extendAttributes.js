import * as f from '@f'
import forEach from 'ramda/src/forEach'
import toPairs from 'ramda/src/toPairs'
import addEventListener from './addEventListener'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'

import isEvent from './isEvent'

const extendAttributes = (element) =>
  (args) =>
    f.cond(
      [isEvent, addEventListener(element)],
      [f.test(/^on[A-Z][a-z]+_stop$/, f.__), addEventListenerWithStop(element)],
      [f.test(/^on[A-Z][a-z]+_prevent$/, f.__), addEventListenerWithPrevent(element)],
      [f.test(/^on[A-Z][a-z]+_(stop|prevent)_(stop|prevent)$/, f.__), addEventListenerWithStopAndPrevent(element)],
      [f.test(/^className$/, f.__), setClassName(element)],
      [f.T, setAttribute(element)]
    )(...args)

export default (attributes, element) =>
  f.always(element)(forEach(extendAttributes(element), toPairs(attributes)))
