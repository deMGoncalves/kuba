import * as f from '@kuba/f'
import headers from './headers'

export default (key, value) =>
  f.assign(headers, { key, value })
