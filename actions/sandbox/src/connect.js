import h, { render } from '@kuba/h'
import * as f from '@kuba/f'

export default function (sandbox) {
  const worker = sandbox.connect()
  const paint = (node) => node
    // f.is(String, node)
    //   ? node
    //   : h(node.name, node.props, ...f.map(node.children, paint))


  worker.addEventListener('message', ({ data: { action, payload }}) => {
    f.equal('render', action) && (
      document[payload.element].append(...f.map(payload.children, paint))
    )
  })

  worker.postMessage({
    action: 'render',
    payload: sandbox.props
  })
}
