import h from '@h'
import * as f from '@f'

const __canonical__ = Symbol('canonical')

export default (page) =>
  document.head.appendChild(<link href={f.or(page[__canonical__], location.href)} rel='canonical' />)

export {
  __canonical__
}
