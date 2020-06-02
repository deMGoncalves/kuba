import h from '@h'
import * as f from '@f'

const __siteName__ = Symbol('siteName')

export default (page) =>
  document.head.appendChild(<meta property='og:site_name' content={f.or(page[__siteName__], 'JRMod')} />)

export {
  __siteName__
}
