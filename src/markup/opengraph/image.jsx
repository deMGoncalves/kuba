import h from '@h'
import * as f from '@f'

export default (page) =>
  document.head.append(document.head.append(<meta property='og:image' content={f.or(page.image, '')} />))
