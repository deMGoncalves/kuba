import * as f from '@kuba/f'
import event from './event'
import method from './method'
import onScreen from './onScreen'

const lazyLoad = (node, listener) => (
  window.addEventListener(event, (node[method] = f.debounce(() =>
    onScreen(node) && (
      window.removeEventListener(event, node[method]),
      listener()
    )
  ))),

  node[method]()
)

export default f.curry(lazyLoad)
