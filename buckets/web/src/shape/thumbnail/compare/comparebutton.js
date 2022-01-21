import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class CompararButton {
  #shape

  add () {
    Compare.add(this.#shape)
    return this
  }

  changeShape (shape) {
    this.#shape = shape
    return this
  }
}

export default CompararButton
