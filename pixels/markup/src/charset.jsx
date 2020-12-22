import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<meta charset={f.or(schema.charset, 'UTF-8')} />)
