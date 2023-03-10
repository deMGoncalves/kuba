import { paint, repaint } from '@kuba/h'
import component from './component'
import props from '@kuba/props'
import scroll from './scroll'

@paint(component)
@props
@scroll
class Zone {
  #onView = false;

  [component.onView] () {
    return this.#onView
  }

  [scroll.element] () {
    const [child] = this[paint.rootAST]().children
    return child.__node__
  }

  @repaint
  [scroll.render] () {
    this.#onView = true
    return this
  }
}

export default Zone
