import h from '@h'
import * as f from '@f'

const __title__ = Symbol('title')

export default (page) =>
  document.head.appendChild(<title>{ f.or(page[__title__], 'JRMod & Chutando lata pedals') }</title>)

export {
  __title__
}
