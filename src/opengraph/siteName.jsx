import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta property='og:site_name' content={f.or(page.siteName, 'Zuen')} />)
