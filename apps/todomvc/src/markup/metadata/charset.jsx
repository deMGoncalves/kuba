import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta charset={f.or(page.charset, 'utf-8')} />)
