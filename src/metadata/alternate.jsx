import h from '@h'
import * as f from '@f'

const __alternate__ = Symbol('alternate')

export default (page) =>
  document.head.appendChild(<link rel='alternate' href={f.or(page[__alternate__], location.href)} hrefLang='x-default' />)

export {
  __alternate__
}
