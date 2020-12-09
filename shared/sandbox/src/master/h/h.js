import * as f from '@rex/f'
import createNode from './createNode'
import createText from './createText'
import isNode from './isNode'
import isText from './isText'

export default f.cond(
  [isNode, createNode],
  [isText, createText]
)
