import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta name='twitter:title' content={f.or(page.title, 'TodoMVC - Helping you select an MV* framework')} />)
