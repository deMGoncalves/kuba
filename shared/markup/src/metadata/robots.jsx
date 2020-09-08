import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='robots' content={f.or(page.robots, f.prop('robots', config))} />)
