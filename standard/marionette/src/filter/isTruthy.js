import * as f from '@kuba/f'
import { after } from '@kuba/middleware'

const isTruthy = (output) => (
  f.isTruthy(output)
    ? output
    : undefined
)

export default after(isTruthy)
