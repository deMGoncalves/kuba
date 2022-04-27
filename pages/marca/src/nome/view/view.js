import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class View {
  #len

  get len () {
    return this.#len
  }

  @repaint
  [effect.onChange] (len) {
    this.#len = len
    return this
  }
}

export default View
