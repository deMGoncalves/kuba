import magic from '@kuba/magic'
import willMount, { hook as _hook } from './willMount'

const event = magic.willUpdate
const willUpdate = willMount.bind({ event })
const hook = _hook.bind({ event })

export default willUpdate
export {
  hook
}
