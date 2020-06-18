import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.appendChild(<meta name='twitter:description' content={f.or(page.description, '')} />)
