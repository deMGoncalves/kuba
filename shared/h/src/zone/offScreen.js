import * as f from '@rex/f'

const render = f.magic('render')

const offScreen = (zone) => {
  const handler = f.debounce(() =>
    f.not(f.offScreen(zone.__element__)) && (
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
