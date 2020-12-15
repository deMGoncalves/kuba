import * as f from '@rex/f'
import addEventListener from './addEventListener'
import classAreDifferent from './classAreDifferent'
import eventAreDifferent from './eventAreDifferent'
import notHasAttribute from './notHasAttribute'
import notHasClassName from './notHasClassName'
import notHasEvent from './notHasEvent'
import removeAttribute from './removeAttribute'
import removeClassName from './removeClassName'
import removeEventListener from './removeEventListener'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import valueAreDifferent from './valueAreDifferent'

export default (node, vNode) => (
  f.forEach(
    f.keys(node.attributes),
    f.cond(
      [notHasAttribute(vNode), removeAttribute(node)],
      [notHasClassName(vNode), removeClassName(node)],
      [notHasEvent(vNode), removeEventListener(node)]
    )
  ),

  f.forEach(
    f.entries(vNode.attributes),
    f.apply(
      f.cond(
        [notHasAttribute(node), setAttribute(node)],
        [notHasClassName(node), setClassName(node)],
        [notHasEvent(node), addEventListener(node)],
        [classAreDifferent(node), setClassName(node)],
        [eventAreDifferent(node), addEventListener(node)],
        [valueAreDifferent(node), setAttribute(node)]
      )
    )
  )
)
