import * as f from '@f'
import forEach from 'ramda/src/forEach'
import addEventListener from './addEventListener'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'

const extendAttributes = (element) =>
  (args) =>
    f.cond(
      [isEvent, addEventListener(element)],
      [isEventWithStop, addEventListenerWithStop(element)],
      [isEventWithPrevent, addEventListenerWithPrevent(element)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(element)],
      [isClassName, setClassName(element)],
      [f.T, setAttribute(element)]
    )(...args)

export default (attributes, element) =>
  f.always(element)(forEach(extendAttributes(element), f.toPairs(attributes)))
