import * as f from '@kuba/f'
import schema from './schema.json'

function fbq () {
  fbq.callMethod
    ? fbq.callMethod.apply(fbq, arguments)
    : fbq.queue.push(arguments)
}

f.assign(fbq, {
  push: fbq,
  loaded: f.T(),
  version: schema.version,
  queue: []
})

window._fbq ??= fbq
window.fbq ??= fbq

export default fbq
