import h from '@h'
import * as f from '@f'

const __image__ = Symbol('image')
const defaultUrl = 'https://dummyimage.com/200x200/1a1a1a/1a1a1a.png'

export default (page) =>
  document.head.appendChild(<meta name='twitter:image' content={f.or(page[__image__], defaultUrl)} />)

export {
  __image__
}
