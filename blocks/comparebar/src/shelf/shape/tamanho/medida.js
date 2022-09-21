import * as f from '@kuba/f'

export default (value) => (
  f.test(/N\/D/, value)
    ? `${value}`
    : `${value}"`
)
