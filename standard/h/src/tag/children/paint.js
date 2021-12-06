import * as f from '@kuba/f'

export default (child) =>
  f.has('paint', child)
    ? child.paint()
    : child[f.magic('paint')]()
