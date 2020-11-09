import * as f from '@rex/f'
import off from './off'
import on from './on'

const lazyRender = (zone) => {
  const handler = f.debounce(() =>
    f.not(f.offScreen(zone[f.magic('h/element')])) && (
      off(handler),
      zone[f.magic('zone/render')]()
    )
  )

  on(handler)
  handler()
}

export default f.idle(lazyRender)
