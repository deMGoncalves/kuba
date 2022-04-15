import * as f from '@kuba/f'
import schema from './schema.json'

function pintrk () {
  pintrk.queue.push(Array.prototype.slice.call(arguments))
}

f.assign(pintrk, {
  queue: [],
  version: schema.version
})

window.pintrk ??= pintrk

export default pintrk
