import * as f from '@kuba/f'
import createDocumentFragment from './createDocumentFragment'
import createElement from './createElement'
import createTextNode from './createTextNode'

const evaluate = f.cond(
  [createElement.is, createElement.exec],
  [createTextNode.is, createTextNode.exec],
  [createDocumentFragment.is, createDocumentFragment.exec]
)

const create = (element) => (
  evaluate(element).cloneNode()
)

export default create
