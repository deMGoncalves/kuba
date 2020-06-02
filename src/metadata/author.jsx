import h from '@h'
import * as f from '@f'

const __author__ = Symbol('author')

export default (page) =>
  document.head.appendChild(<meta name='author' content={f.or(page[__author__], 'JRMod')} />)

export {
  __author__
}
