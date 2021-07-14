import * as f from '@kuba/f'
import flatten from './flatten'
import setClassName from './setClassName'

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

  different (className) {
    return f.different(this.value, className.value)
  }

  paint () {
    setClassName(this)
    return this
  }

  reflow (className) {
    this.different(className) && this.repaint(className)
    return this
  }

  repaint (className) {
    this.#value = className.value
    setClassName(this)
    return this
  }

  static create (props, target) {
    return new ClassName(flatten(props), target)
  }
}

export default ClassName
