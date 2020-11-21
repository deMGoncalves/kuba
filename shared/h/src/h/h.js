import * as f from '@rex/f'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isComponent from './isComponent'
import isTagName from './isTagName'

export default (tagNameOrComponent, attributes, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent]
  )(tagNameOrComponent, { ...attributes }, f.flatten(children))
