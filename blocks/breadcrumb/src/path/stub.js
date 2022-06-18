import * as f from '@kuba/f'
import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Stub {
  #index

  get path () {
    return '#'
  }

  get title () {
    return ''
  }

  constructor (index) {
    this.#index = index
  }

  redirect () {
    return this
  }

  [component.showPrefix] () {
    return f.isTruthy(this.#index)
  }

  static create (_data, index) {
    return new Stub(index)
  }
}

export default Stub
