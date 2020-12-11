import * as f from '@rex/f'
import createFragment from './createFragment'
import createNode from './createNode'
import createText from './createText'
import isFragment from './isFragment'
import isNode from './isNode'
import isText from './isText'

export default f.cond(
  [isFragment, createFragment],
  [isNode, createNode],
  [isText, createText]
)
