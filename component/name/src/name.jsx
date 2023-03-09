import * as filter from '@kuba/filter'
import * as validator from '@kuba/validator'
import { paint, repaint } from '@kuba/h'
import component from './component'

@paint(component)
class Name {
  #state
  #value

  get state () {
    return (this.#state ??= '')
  }

  get value () {
    return (this.#value ??= '')
  }

  @filter.value
  @validator.required
  onChange (value) {
    this.#value = value
    return this
  }

  @repaint
  [validator.outlet] (state) {
    this.#state = state
    return this
  }
}

export default Name
