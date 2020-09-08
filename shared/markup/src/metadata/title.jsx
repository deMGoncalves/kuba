import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <title>{f.or(page.title, f.prop('title', config))}</title>)
