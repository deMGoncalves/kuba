import * as f from '@rex/f'
import paint from '@rex/h/src/paint'
import repaint from '@rex/h/src/repaint'
import offScreen, { render } from './offScreen'
import component from './component'

const oneOff = f.magic('oneOff')

@paint(component)
class Zone {
  get className () {
    return this[oneOff].className
  }

  get offScreen () {
    return !!this[oneOff].offScreen
  }

  get slot () {
    return this[oneOff].slot
  }

  constructor (props) {
    this[oneOff] = { ...props, offScreen: f.T() }
    offScreen(this)
    return this
  }

  @repaint
  [render] () {
    this[oneOff].offScreen = f.F()
    return this
  }
}

export default Zone
