import * as f from '@rex/f'
import isOnScreen from './isOnScreen'

const render = f.magic('render')

const offScreen = (zone) => {
  const handler = f.debounce(() =>
    isOnScreen(zone) && (
      window.removeEventListener('scroll', handler),
      zone[render]()
    )
  )

  window.addEventListener('scroll', handler)
  handler()
}

export default f.idle(offScreen)
export {
  render
}
