import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(<meta name='twitter:image' content={f.or(page.image, '')} />)
