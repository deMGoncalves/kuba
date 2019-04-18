import * as r from 'ramda'
import executeComponent from './executeComponent'
import createElement from './createElement'

const h = r.cond([
  [r.is(String), createElement],
  [r.is(Function), executeComponent]
])

export default (tagNameOrComponent, attributes, ...children) =>
  h(tagNameOrComponent, { ...attributes }, r.flatten(children))
