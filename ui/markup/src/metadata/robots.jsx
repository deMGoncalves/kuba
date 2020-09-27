import h, { render } from '@rex/h'
import * as f from '@rex/f'
import schema from '@rex/markup/src/schema.json'

export default (page) =>
  render(document.head, <meta name='robots' content={f.or(page.robots, f.prop('robots', schema))} />)
