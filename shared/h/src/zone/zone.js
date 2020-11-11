import * as f from '@rex/f'
import paint from '@rex/h/src/paint'
import repaint from '@rex/h/src/repaint'
import component from './component'

const $private = f.magic('private')
const render = f.magic('render')

@paint(component)
class Zone {
  get className () {
    return this[$private].className
  }

  get offScreen () {
    return this[$private].offScreen
  }

  get slot () {
    return this[$private].slot
  }

  constructor (props) {
    this[$private] = {
      ...props,
      offScreen: f.T()
    }

    f.lazyLoad(this, () => this[render]())
    return this
  }

  @repaint
  [render] () {
    this[$private].offScreen = f.F()
    return this
  }
}

export default Zone
