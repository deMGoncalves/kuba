import h from '@rex/h'
import * as f from '@rex/f'
import render from './render'

export default (page) =>
  render(<link href={f.or(page.canonical, location.href)} rel='canonical' />)
