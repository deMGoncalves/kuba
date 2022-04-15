import * as f from '@kuba/f'
import schema from './schema.json'

function twq () {
  twq.exe
    ? twq.exe.apply(twq, arguments)
    : twq.queue.push(arguments)
}

f.assign(twq, {
  version: schema.version,
  queue: []
})

window.twq ??= twq

export default twq
