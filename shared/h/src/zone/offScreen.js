import * as f from '@rex/f'

const offScreen = (zone) => {
  const handler = f.debounce(() =>
    f.not(f.offScreen(zone[f.magic('h/element')])) && (
      window.removeEventListener('scroll', handler),
      zone[f.magic('render')]()
    )
  )

  window.addEventListener('scroll', handler)
  handler()
}

export default f.idle(offScreen)
