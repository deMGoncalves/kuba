import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class CompararButton {
  #pristine
  #shape

  get pristine () {
    return this.#pristine ??= f.T()
  }

  add () {
    Compare.add(this.#shape)
    return this
  }

  @repaint
  changeShape (shape) {
    this.#pristine = f.F()
    this.#shape = shape
    return this
  }
}

export default CompararButton
