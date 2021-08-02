import { render } from '@kuba/h'
import * as f from '@kuba/f'

export default function (sandbox) {
  const worker = sandbox.connect()
  worker.addEventListener('message', ({ data: { action, payload }}) => {
    console.log(action, payload)
  })

  worker.postMessage({
    action: 'render',
    payload: sandbox.props
  })
}
