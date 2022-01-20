import { paint } from '@kuba/h'
import component from './component'

@paint(component)
class Stub {
  #index
  #page
  #params
  #title

  get index () {
    return this.#index ??= ''
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (index) {
    this.#index = index
  }

  redirect () {
    return this
  }

  static create (_data, index) {
    return new Stub(index)
  }
}

export default Stub
