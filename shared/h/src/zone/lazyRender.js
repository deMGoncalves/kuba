import * as f from '@rex/f'

const lazyRender = (zone) => {
  const handler = f.debounce(() =>
    f.not(f.offScreen(zone[f.magic('h/element')])) && (
      window.removeEventListener('scroll', handler),
      zone[f.magic('zone/render')]()
    )
  )

  window.addEventListener('scroll', handler)
  handler()
}

export default f.idle(lazyRender)
