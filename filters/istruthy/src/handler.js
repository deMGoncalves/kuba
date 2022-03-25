import * as f from '@kuba/f'

export default (value) => (
  f.isTruthy(value)
    ? value
    : undefined
)
