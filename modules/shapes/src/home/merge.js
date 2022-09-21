import * as f from '@kuba/f'
import global from '@kuba/global'

const page = f.dunder('page')

const merge = (shapes, target) => (
  f.equal(page(target), 1)
    ? shapes
    : [...global.shapes, ...shapes]
)

f.assign(merge, {
  page
})

export default merge
