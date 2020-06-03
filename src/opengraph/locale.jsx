import h from '@h'
import * as f from '@f'

const __locale__ = Symbol('locale')

export default (page) =>
  document.head.appendChild(<meta property='og:locale' content={f.or(page[__locale__], 'pr_BR')} />)

export {
  __locale__
}
