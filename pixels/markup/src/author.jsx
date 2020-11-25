import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  render(<meta name='author' content={f.or(page.author, '')} />)
