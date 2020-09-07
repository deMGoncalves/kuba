import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta property='og:image' content={f.or(page.image, '/rex.png')} />)
