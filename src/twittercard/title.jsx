import h from '@h'
import * as f from '@f'

const __title__ = Symbol('title')

export default (page) =>
  document.head.appendChild(<meta name='twitter:title' content={f.or(page[__title__], 'JRMod & Chutando lata pedals')} />)

export {
  __title__
}
