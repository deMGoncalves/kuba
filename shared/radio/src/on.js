import * as f from '@kuba/f'
import worker from './worker'

const on = (channel, handler) =>
  worker.addEventListener('message', (e) =>
    f.equal(channel, f.prop('data.channel', e)) && handler(f.prop('data.message', e)))

export default f.curry(on)
