import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta property='og:description' content={f.or(page.description, '')} />)
