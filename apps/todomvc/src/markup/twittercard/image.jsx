import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta name='twitter:image' content={f.or(page.image, 'https://rex-todomvc.web.app/rex.png')} />)
