import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='twitter:description' content={f.or(page.description, f.prop('description', config))} />)
