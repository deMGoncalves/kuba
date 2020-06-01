import h from '@h'
import * as f from '@f'

const __viewport__ = Symbol('viewport')
const defaultViewport = 'width=device-width, initial-scale=1, shrink-to-fit=no'

export default (page) =>
  document.head.appendChild(<meta name='viewport' content={f.or(page[__viewport__], defaultViewport)} />)

export {
  __viewport__
}
