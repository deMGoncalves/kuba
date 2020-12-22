import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<meta name='robots' content={f.or(schema.robots, 'index, follow')} />)
