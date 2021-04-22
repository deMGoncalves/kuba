import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'
import settings from './settings'

export default (page) =>
  render(<title>{f.or(page.title, settings.title, '')}</title>)
