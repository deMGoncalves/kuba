import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta property='og:title' content={f.or(page.title, 'TodoMVC - Helping you select an MV* framework')} />)
