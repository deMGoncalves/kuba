import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta property='og:type' content={f.or(page.type, f.prop('type', config))} />)
