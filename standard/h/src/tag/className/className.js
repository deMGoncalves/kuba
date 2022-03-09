import { eager } from '@kuba/h'
import * as f from '@kuba/f'
import flatten from './flatten'

class ClassName {
  #target
  #value

  get value () {
    return this.#value ??= ''
  }

  constructor (props, target) {
    this.#target = target
    this.#value = flatten(props)
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

  static create (...args) {
    return eager(ClassName, ...args)
  }
}

export default ClassName
