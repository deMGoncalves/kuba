import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta property='og:url' content={f.or(page.url, location.href)} />)
