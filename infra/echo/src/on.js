import * as f from '@kuba/f'
import worker from './worker'

const on = (channel, listener) =>
  worker.addEventListener('message', (event) =>
    f.equal(channel, event.data?.channel) && listener(event.data?.message))

export default f.curry(on)
