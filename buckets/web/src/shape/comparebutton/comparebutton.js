import { paint } from '@kuba/h'
import Compare from '@kuba/compare'
import global from '@kuba/global'
import component from './component'

@paint(component)
class CompararButton {
  #shape

  add () {
    Compare.add(this.#shape)
    return this
  }

  constructor (shape) {
    this.#shape = shape
  }

  static create () {
    return new CompararButton(global)
  }
}

export default CompararButton
