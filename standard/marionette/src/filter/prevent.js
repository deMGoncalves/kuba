import { before } from '@kuba/middleware'

const prevent = (e) => (
  e.preventDefault(),
  [e]
)

export default before(prevent)
