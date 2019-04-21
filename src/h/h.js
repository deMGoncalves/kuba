import cond from 'ramda/src/cond'
import flatten from 'ramda/src/flatten'
import T from 'ramda/src/T'
import createElement from './createElement'
import executeComponent from './executeComponent'
import isTagName from './isTagName'

const h = cond([
  [isTagName, createElement],
  [T, executeComponent]
])

export default (tagNameOrComponent, attributes, ...children) =>
  h(tagNameOrComponent, { ...attributes }, flatten(children))
