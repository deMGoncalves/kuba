import * as f from '@rex/f'
import addEventListener from './addEventListener'
import isClassName from './isClassName'
import isEvent from './isEvent'
import isHTMLFor from './isHTMLFor'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setHTMLFor from './setHTMLFor'

export default (node) =>
  (args) =>
    f.cond(
      [isClassName, setClassName(node)],
      [isEvent, addEventListener(node)],
      [isHTMLFor, setHTMLFor(node)],
      [f.T, setAttribute(node)]
    )(...args)
