import * as f from '@rex/f'
import addEventListenerPure from './addEventListenerPure'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'
import isHtmlFor from './isHtmlFor'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

export default (element) =>
  (keyAndValue) =>
    f.cond(
      [isEvent, addEventListenerPure(element)],
      [isEventWithStop, addEventListenerWithStop(element)],
      [isEventWithPrevent, addEventListenerWithPrevent(element)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(element)],
      [isClassName, setClassName(element)],
      [isHtmlFor, setHtmlFor(element)],
      [f.T, setAttribute(element)]
    )(...keyAndValue)
