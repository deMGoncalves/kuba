import * as r from 'ramda'
import createElement from './createElement'
import executeComponent from './executeComponent'

const h = r.cond([
  [r.is(String), createElement],
  [r.is(Function), executeComponent]
])

export default (tagNameOrComponent, attributes, ...children) =>
  h(tagNameOrComponent, { ...attributes }, r.flatten(children))
