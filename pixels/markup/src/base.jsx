import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<base href={f.or(schema.base, '/')} />)
