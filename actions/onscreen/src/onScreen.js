import * as f from '@kuba/f'
import event from './event'
import method from './method'
import onView from './onView'

const onScreen = (node, listener) => (
  window.addEventListener(event, (node[method] = f.debounce(() =>
    onView(node) && (
      window.removeEventListener(event, node[method]),
      listener()
    )
  ))),

  node[method]()
)

export default f.curry(onScreen)
