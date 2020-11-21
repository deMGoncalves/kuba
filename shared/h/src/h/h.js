import * as f from '@rex/f'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'

export default (tagNameOrComponent, props, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent]
  )(tagNameOrComponent, props, f.flatten(children))
