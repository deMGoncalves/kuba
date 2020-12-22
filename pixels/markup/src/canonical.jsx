import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (schema) =>
  render(<link href={f.or(schema.canonical, location.href)} rel='canonical' />)
