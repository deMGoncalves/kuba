import h from '@h'
import * as f from '@f'

export default (page) =>
  []
    .concat(page.image)
    .forEach(url => document.head.append(<meta name='twitter:image' content={f.or(url, '')} />))
