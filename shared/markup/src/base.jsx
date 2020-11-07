import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  render(<base href={f.or(page.base, '/')} />)
