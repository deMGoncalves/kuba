import h from '@h'
import * as f from '@f'

const __summary__ = Symbol('summary')

export default (page) =>
  document.head.appendChild(<meta name='twitter:card' content={f.or(page[__summary__], 'summary_large_image')} />)

export {
  __summary__
}
