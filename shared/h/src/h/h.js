import * as f from '@rex/f'
import createComment from '@rex/h/src/createComment'
import createElement from '@rex/h/src/createElement'
import executeComponent from '@rex/h/src/executeComponent'
import isComponent from '@rex/h/src/isComponent'
import isTagName from '@rex/h/src/isTagName'
import slot from '@rex/h/src/slot'

export default (tagNameOrComponent, attributes, ...children) =>
  f.cond(
    [isTagName, createElement],
    [isComponent, executeComponent],
    [f.T, createComment]
  )(tagNameOrComponent, { ...attributes }, slot(f.flatten(children)))
