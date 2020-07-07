import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='twitter:card' content={f.or(page.summary, 'summary_large_image')} />)
