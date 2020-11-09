import * as f from '@rex/f'
import hook from '@rex/hook'
import paint from '@rex/h/src/paint'
import repaint from '@rex/h/src/repaint'
import lazyRender from './lazyRender'
import component from './component'

const $private = f.magic('private')

@paint(component)
@hook(lazyRender)
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
  [f.magic('zone/render')] () {
    this[$private].onScreen = f.T()
    return this
  }
}

export default Zone
