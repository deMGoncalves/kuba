import * as f from '@rex/f'
import appendNode from './appendNode'
import doNothing from './doNothing'
import nodeAreCustom from './nodeAreCustom'
import nodeAreDifferent from './nodeAreDifferent'
import nodeAreEqual from './nodeAreEqual'
import nodeIsAdded from './nodeIsAdded'
import nodeIsRemoved from './nodeIsRemoved'
import parentIsRoot from './parentIsRoot'
import removeNode from './removeNode'
import replaceNode from './replaceNode'
import restrictAttributes from './restrictAttributes'
import restrictNode from './restrictNode'
import setTextContent from './setTextContent'
import stateAreDifferent from './stateAreDifferent'
import stateAreEqual from './stateAreEqual'
import textContentAreDifferent from './textContentAreDifferent'

export default f.cond(
  [nodeIsRemoved, removeNode],
  [nodeIsAdded, appendNode],
  [parentIsRoot, restrictNode],
  [stateAreDifferent, replaceNode],
  [stateAreEqual, doNothing],
  [nodeAreCustom, restrictAttributes],
  [nodeAreDifferent, replaceNode],
  [nodeAreEqual, restrictNode],
  [textContentAreDifferent, setTextContent]
)
