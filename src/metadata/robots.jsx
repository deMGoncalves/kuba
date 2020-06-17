import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta name='robots' content={f.or(page.robots, 'index, follow')} />)
