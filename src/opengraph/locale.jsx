import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta property='og:locale' content={f.or(page.locale, 'pr_BR')} />)
