import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta property='og:site_name' content={f.or(page.title, 'Zuen')} />)
