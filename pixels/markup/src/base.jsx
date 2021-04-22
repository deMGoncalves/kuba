import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'
import settings from './settings'

export default (page) =>
  render(<base href={f.or(page.base, settings.base, '/')} />)
