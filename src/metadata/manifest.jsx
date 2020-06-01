import h from '@h'
import * as f from '@f'

const __manifest__ = Symbol('manifest')

export default (page) =>
  document.head.appendChild(<link href={f.or(page[__manifest__], '/manifest.json')} rel='manifest' />)

export {
  __manifest__
}
