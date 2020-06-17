import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta property='og:type' content={f.or(page.type, 'website')} />)
