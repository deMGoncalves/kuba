import * as f from '@kuba/f'
import flatten from './flatten'
import paint from './paint'
import repaint from './repaint'

@paint
class ClassName {
  #target
  #value

  get target () {
    return this.#target
  }

  get value () {
    return this.#value
  }

  constructor (value, target) {
    this.#target = target
    this.#value = value
  }

  @repaint
  changeValue (value) {
    this.#value = value
    return this
  }

  reflow (other) {
    f.different(this.value, other.value) && (
      this.changeValue(other.value)
    )
    return this
  }

  static create (props, target) {
    return new ClassName(flatten(props), target)
  }
}

export default ClassName
