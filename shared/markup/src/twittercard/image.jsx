import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page, config) =>
  render(document.head, <meta name='twitter:image' content={f.or(page.image, f.prop('image', config))} />)
