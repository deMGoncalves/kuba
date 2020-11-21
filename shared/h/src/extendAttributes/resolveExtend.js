import * as f from '@rex/f'
import addEventListenerPure from './addEventListenerPure'
import addEventListenerWithPrevent from './addEventListenerWithPrevent'
import addEventListenerWithStop from './addEventListenerWithStop'
import addEventListenerWithStopAndPrevent from './addEventListenerWithStopAndPrevent'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isEventWithStop from './isEventWithStop'
import isEventWithPrevent from './isEventWithPrevent'
import isEventWithStopAndPrevent from './isEventWithStopAndPrevent'
import isHtmlFor from './isHtmlFor'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHtmlFor from './setHtmlFor'

export default (node) =>
  (keyAndValue) =>
    f.cond(
      [isEvent, addEventListenerPure(node)],
      [isEventWithStop, addEventListenerWithStop(node)],
      [isEventWithPrevent, addEventListenerWithPrevent(node)],
      [isEventWithStopAndPrevent, addEventListenerWithStopAndPrevent(node)],
      [isClassName, setClassName(node)],
      [isHtmlFor, setHtmlFor(node)],
      [f.T, setAttribute(node)]
    )(...keyAndValue)
