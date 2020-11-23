import curry from '@rex/f/src/curry'
import debounce from '@rex/f/src/debounce'
import magic from '@rex/f/src/magic'
import not from '@rex/f/src/not'
import offScreen from '@rex/f/src/offScreen'

const event = 'scroll'
const listener = magic('listener')

const lazyLoad = (node, handler) => (
  window.addEventListener(event, (node[listener] = debounce(() =>
    not(offScreen(node)) && (
      window.removeEventListener(event, node[listener]), handler())
  ))
  ),

  node[listener]()
)

export default curry(lazyLoad)
