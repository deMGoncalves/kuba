import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  render(<meta charset={f.or(page.charset, 'UTF-8')} />)
