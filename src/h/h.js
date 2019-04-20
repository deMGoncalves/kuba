import cond from 'ramda/src/cond'
import flatten from 'ramda/src/flatten'
import is from 'ramda/src/is'
import createElement from './createElement'
import executeComponent from './executeComponent'

const h = cond([
  [is(String), createElement],
  [is(Function), executeComponent]
])

export default (tagNameOrComponent, attributes, ...children) =>
  h(tagNameOrComponent, { ...attributes }, flatten(children))
