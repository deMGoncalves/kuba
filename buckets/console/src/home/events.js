import * as f from '@kuba/f'
import middleware from '@kuba/middleware'

const { onEvent } = f.dunder

const events = middleware((target) => (
  setTimeout(() => target[onEvent](), 1000)
))

f.assign(events, {
  onEvent
})

export default events
