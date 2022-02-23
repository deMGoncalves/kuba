import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Pro {
  #are

  get are () {
    return this.#are ??= f.F()
  }

  constructor (are) {
    this.#are = are
  }

  static create (shape) {
    return new Pro(shape.pro_model)
  }
}

export default Pro
