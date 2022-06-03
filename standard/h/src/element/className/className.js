import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
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

  update (newClassName) {
    return new Promise((resolve) => (
      f.different(this, newClassName) && (
        this.#value = newClassName.value,
        this.#target.setClassName(this.value)
      ),
      resolve(this)
    ))
  }

  [f.dunder.different] () {
    return this.value
  }

  static create (...args) {
    return lazy(ClassName, ...args)
  }
}

export default ClassName
