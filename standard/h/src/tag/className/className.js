import * as f from '@kuba/f'
import { eager } from '@kuba/h'
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

  mount () {
    return new Promise((resolve) => (
      this.value && (
        this.#target.setClassName(this.value)
      ),
      resolve(this)
    ))
  }

  update (vClassName) {
    return new Promise((resolve) => (
      f.different(this, vClassName) && (
        this.#value = vClassName.value,
        this.#target.setClassName(this.value)
      ),
      resolve(this)
    ))
  }

  [f.dunder.different] () {
    return this.value
  }

  static create (...args) {
    return eager(ClassName, ...args)
  }
}

export default ClassName
