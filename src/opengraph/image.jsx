import h from '@h'
import * as f from '@f'

const __image__ = Symbol('image')
const defaultUrl = 'https://dummyimage.com/192x192/1a1a1a/1a1a1a.png'

export default (page) =>
  []
    .concat(page[__image__])
    .forEach(url => document.head.appendChild(<meta property='og:image' content={f.or(url, defaultUrl)} />))

export {
  __image__
}
