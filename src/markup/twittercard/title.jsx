import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='twitter:title' content={f.or(page.title, 'Zuen')} />)
