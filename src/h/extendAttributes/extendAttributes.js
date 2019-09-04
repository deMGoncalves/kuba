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
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'

const extendAttributes = (element) =>
  (args) =>
    f.cond(
      [isEvent, addEventListener(element)],
      [isEventWithStop, addEventListenerWithStop(element)],
      [isEventWithPrevent, addEventListenerWithPrevent(element)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(element)],
      [f.test(/^className$/, f.__), setClassName(element)],
      [f.T, setAttribute(element)]
    )(...args)

export default (attributes, element) =>
  f.always(element)(forEach(extendAttributes(element), toPairs(attributes)))
