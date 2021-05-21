import * as f from '@kuba/f'
import event from './event'
import listener from './listener'
import onScreen from './onScreen'

const lazyLoad = (node, handler) => (
  window.addEventListener(event, (node[listener] = f.debounce(() =>
    onScreen(node) && (
      window.removeEventListener(event, node[listener]),
      handler()
    )
  ))),

  node[listener]()
)

export default f.curry(lazyLoad)
