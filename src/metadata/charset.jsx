import h from '@h'
import * as f from '@f'

const __charset__ = Symbol('charset')

export default (page) =>
  document.head.appendChild(<meta charset={f.or(page[__charset__], 'utf-8')} />)

export {
  __charset__
}
