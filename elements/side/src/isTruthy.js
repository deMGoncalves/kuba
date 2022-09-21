import * as f from '@kuba/f'

const isTruthy = (value) => (
  f.isTruthy(value)
    ? value
    : undefined
)

export default f.memoize(isTruthy)
