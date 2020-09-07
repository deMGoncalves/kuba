import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta name='viewport' content={f.or(page.viewport, 'width=device-width, initial-scale=1, shrink-to-fit=no')} />)
