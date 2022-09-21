import { before } from '@kuba/middleware'

const value = (e) => (
  [e.target.value]
)

export default before(value)
