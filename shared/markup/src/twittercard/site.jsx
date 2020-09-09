import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='twitter:site' content={f.or(page.name, f.prop('name', config))} />)
