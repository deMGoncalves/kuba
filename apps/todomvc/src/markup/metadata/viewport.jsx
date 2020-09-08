import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='viewport' content={f.or(page.viewport, f.prop('viewport', config))} />)
