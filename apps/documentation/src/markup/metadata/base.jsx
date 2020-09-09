import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<base href={f.or(page.base, '/')} />)
