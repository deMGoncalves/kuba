import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta charset={f.or(page.charset, 'utf-8')} />)
