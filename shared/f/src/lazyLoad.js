import curry from '@rex/f/src/curry'
import debounce from '@rex/f/src/debounce'
import magic from '@rex/f/src/magic'
import not from '@rex/f/src/not'
import offScreen from '@rex/f/src/offScreen'

const event = 'scroll'
const listener = magic('f/lazyLoad')

const lazyLoad = (target, handler) =>
  window.addEventListener(event, (target[listener] = debounce(() =>
    not(offScreen(target)) && (
      window.removeEventListener(event, target[listener]), handler())
    ))
  )

export default curry(lazyLoad)
