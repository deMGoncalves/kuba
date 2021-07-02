import * as f from '@kuba/f'
import flatten from './flatten'

class ClassName {
  #target
  #value

  get value () {
    return this.#value
  }

  constructor (value, target) {
    this.#target = target
    this.#value = value
  }

  different (className) {
    return f.different(this.value, className.value)
  }

  paint () {
    this.#target.setClassName(this.value)
    return this
  }

  reflow (className) {
    this.different(className) && this.repaint(className)
    return this
  }

  repaint (className) {
    this.#value = className.value
    this.#target.setClassName(this.value)
    return this
  }

  static create (props, target) {
    return new ClassName(flatten(props), target)
  }
}

export default ClassName
