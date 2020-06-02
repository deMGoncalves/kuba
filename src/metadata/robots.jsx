import h from '@h'
import * as f from '@f'

const __robots__ = Symbol('robots')

export default (page) =>
  document.head.appendChild(<meta name='robots' content={f.or(page[__robots__], 'index, follow')} />)

export {
  __robots__
}
