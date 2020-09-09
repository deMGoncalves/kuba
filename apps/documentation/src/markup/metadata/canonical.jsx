import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<link href={f.or(page.canonical, location.href)} rel='canonical' />)
