import h from '@h'
import * as f from '@f'

const __themeColor__ = Symbol('themeColor')

export default (page) =>
  document.head.appendChild(<meta name='theme-color' content={f.or(page[__themeColor__], '#1A1A1A')} />)

export {
  __themeColor__
}
