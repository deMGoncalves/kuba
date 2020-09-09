import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <link href={f.or(page.canonical, location.href)} rel='canonical' />)
