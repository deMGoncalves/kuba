import h from '@kuba/h'
import * as f from '@kuba/f'
import render from './render'

export default (page) =>
  render(<link href={f.or(page.canonical, location.href)} rel='canonical' />)
