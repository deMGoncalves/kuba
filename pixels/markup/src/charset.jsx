import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'

export default (page) =>
  render(<meta charset={f.or(page.charset, 'UTF-8')} />)
