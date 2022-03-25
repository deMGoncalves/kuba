import * as f from '@kuba/f'
import global from '@kuba/global'

export default (shapes, target) => (
  f.equal(target.page, 1)
    ? shapes
    : [...global.shapes, ...shapes]
)
