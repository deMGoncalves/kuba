import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'
import settings from './settings'

export default (page) =>
  render(<meta name='author' content={f.or(page.author, settings.author, '')} />)
