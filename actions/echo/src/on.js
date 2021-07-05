import * as f from '@kuba/f'
import worker from './worker'

const on = (channel, listener) =>
  worker.addEventListener('message', (e) =>
    f.equal(channel, f.prop('data.channel', e)) && listener(f.prop('data.message', e)))

export default f.curry(on)
