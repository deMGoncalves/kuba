import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='robots' content={f.or(page.robots, 'index, follow')} />)
