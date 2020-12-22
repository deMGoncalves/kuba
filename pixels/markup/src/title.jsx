import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<title>{f.or(schema.title, 'title')}</title>)
