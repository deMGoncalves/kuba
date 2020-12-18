import * as f from '@rex/f'
import addEventListener from './addEventListener'
import appendNode from './appendNode'
import isAddEventListener from './isAddEventListener'
import isAppendNode from './isAppendNode'
import isRemoveAttribute from './isRemoveAttribute'
import isRemoveClassName from './isRemoveClassName'
import isRemoveEventListener from './isRemoveEventListener'
import isReplaceNode from './isReplaceNode'
import isRemoveNode from './isRemoveNode'
import isSetAttribute from './isSetAttribute'
import isSetClassName from './isSetClassName'
import isSetTextContent from './isSetTextContent'
import removeAttribute from './removeAttribute'
import removeClassName from './removeClassName'
import removeEventListener from './removeEventListener'
import removeNode from './removeNode'
import replaceNode from './replaceNode'
import setAttribute from './setAttribute'
import setClassName from './setClassName'
import setTextContent from './setTextContent'

const reflow = f.cond(
  [isAddEventListener, addEventListener],
  [isAppendNode, appendNode],
  [isRemoveAttribute, removeAttribute],
  [isRemoveClassName, removeClassName],
  [isRemoveEventListener, removeEventListener],
  [isRemoveNode, removeNode],
  [isReplaceNode, replaceNode],
  [isSetAttribute, setAttribute],
  [isSetClassName, setClassName],
  [isSetTextContent, setTextContent]
)

export default f.idle(reflow)
