import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<base href={f.or(page.base, '/')} />)
