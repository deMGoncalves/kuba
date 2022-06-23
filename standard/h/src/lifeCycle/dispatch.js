import * as f from '@kuba/f'

const dispatch = (target, event) => (
  target?.entity?.[f.dunder[event]]?.()
)

export default dispatch
