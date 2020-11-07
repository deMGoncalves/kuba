import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  render(<meta name='robots' content={f.or(page.robots, 'index, follow')} />)
