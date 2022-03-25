import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Pro {
  #are

  get are () {
    return this.#are ??= f.F()
  }

  @repaint
  [effect.onChange] (are) {
    this.#are = are
    return this
  }
}

export default Pro
