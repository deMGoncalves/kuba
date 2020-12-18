import * as f from '@rex/f'

const dispatchEvent = (worker, event) =>
  worker.postMessage({ type: event.detail['@ueid'] })

export default f.curry(dispatchEvent)
