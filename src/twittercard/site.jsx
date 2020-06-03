import h from '@h'
import * as f from '@f'

const __site__ = Symbol('site')

export default (page) =>
  document.head.appendChild(<meta name='twitter:site' content={f.or(page[__site__], '@juniorrossetti')} />)

export {
  __site__
}
