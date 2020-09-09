import h from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  document.head.append(<meta property='og:locale' content={f.or(page.locale, 'pt_BR')} />)
