import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='twitter:description' content={f.or(page.description, '')} />)
