import * as f from '@rex/f'
import createComponent from './createComponent'
import createNode from './createNode'
import isComponent from './isComponent'
import isNode from './isNode'

export default (tagName, attributes, ...children) =>
  f.cond(
    [isNode, createNode],
    [isComponent, createComponent]
  )(tagName, { ...attributes }, f.flatten(children))
