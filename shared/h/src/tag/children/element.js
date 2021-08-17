import * as f from '@kuba/f'

export default (child) =>
  f.has('element', child)
    ? child.element
    : child[f.magic('tag')].element
