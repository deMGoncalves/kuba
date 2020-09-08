import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta charset={f.or(page.charset, f.prop('charset', config))} />)
