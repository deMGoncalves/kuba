import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <title>{f.or(page.title, 'TodoMVC - Helping you select an MV* framework')}</title>)
