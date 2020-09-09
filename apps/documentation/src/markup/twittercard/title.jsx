import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta name='twitter:title' content={f.or(page.title, 'TodoMVC - Helping you select an MV* framework')} />)
