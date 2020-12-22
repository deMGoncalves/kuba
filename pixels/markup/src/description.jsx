import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<meta name='description' content={f.or(schema.description, '')} />)
