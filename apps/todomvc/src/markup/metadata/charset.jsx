import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta charset={f.or(page.charset, 'utf-8')} />)
