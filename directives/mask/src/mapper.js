import * as f from '@kuba/f'
import schema from './schema'

export default (type) =>
  f.or(schema[type], schema.text)
