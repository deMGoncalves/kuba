import * as f from '@rex/f'
import event from './event'
import listener from './listener'
import offScreen from './offScreen'

const lazyLoad = (node, handler) => (
  window.addEventListener(event, (node[listener] = f.debounce(() =>
    f.not(offScreen(node)) && (
      window.removeEventListener(event, node[listener]),
      handler()
    )
  ))),

  node[listener]()
)

export default f.curry(lazyLoad)
