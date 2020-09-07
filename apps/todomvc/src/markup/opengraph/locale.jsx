import h, { render } from '@rex/h'
import * as f from '@rex/f'

export default (page) =>
  render(document.head, <meta property='og:locale' content={f.or(page.locale, 'pt_BR')} />)
