import { before } from '@kuba/middleware'

const stop = (e) => (
  e.stopPropagation(),
  [e]
)

export default before(stop)
