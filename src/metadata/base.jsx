import h from '@h'
import * as f from '@f'

const __base__ = Symbol('base')

export default (page) =>
  document.head.appendChild(<base href={f.or(page[__base__], '/')} />)

export {
  __base__
}
