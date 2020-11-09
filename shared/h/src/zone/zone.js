import * as f from '@rex/f'
import hook from '@rex/hook'
import paint from '@rex/h/src/paint'
import repaint from '@rex/h/src/repaint'
import offScreen from './offScreen'
import component from './component'

const $private = f.magic('private')
const render = f.magic('render')

@paint(component)
@hook(offScreen)
class Zone {
  get className () {
    return this[$private].className
  }

  get onScreen () {
    return !!this[$private].onScreen
  }

  get slot () {
    return this[$private].slot
  }

  constructor (props) {
    this[$private] = { ...props }
    return this
  }

  @repaint
  [render] () {
    this[$private].onScreen = f.T()
    return this
  }
}

export default Zone
