import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta name='robots' content={f.or(page.robots, 'index, follow')} />)
