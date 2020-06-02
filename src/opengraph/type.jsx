import h from '@h'
import * as f from '@f'

const __type__ = Symbol('type')

export default (page) =>
  document.head.appendChild(<meta property='og:type' content={f.or(page[__type__], 'website')} />)

export {
  __type__
}
