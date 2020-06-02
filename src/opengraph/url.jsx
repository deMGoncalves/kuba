import h from '@h'
import * as f from '@f'

const __url__ = Symbol('url')

export default (page) =>
  document.head.appendChild(<meta property='og:url' content={f.or(page[__url__], location.href)} />)

export {
  __url__
}
