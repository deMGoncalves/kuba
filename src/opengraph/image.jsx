import h from '@h'
import * as f from '@f'

export default (page) =>
  []
    .concat(page.image)
    .forEach(url => document.head.appendChild(<meta property='og:image' content={f.or(url, '')} />))
