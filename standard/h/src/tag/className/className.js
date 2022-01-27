import * as f from '@kuba/f'
import flatten from './flatten'

class ClassName {
  #target
  #value

  get value () {
    return this.#value ??= ''
  }

  constructor (value, target) {
    this.#target = target
    this.#value = value
  }

  paint () {
    this.value && (
      this.#target.setClassName(this.value)
    )
    return this
  }

  reflow (vClassName) {
    f.different(this, vClassName) && (
      this.#value = vClassName.value,
      this.#target.setClassName(this.value)
    )
    return this
  }

  [f.dunder.different] () {
    return this.value
  }

  static create (props, target) {
    return new ClassName(flatten(props), target)
  }
}

export default ClassName
