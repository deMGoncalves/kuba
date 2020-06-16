import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta property='og:title' content={f.or(page.title, 'Zuen')} />)
