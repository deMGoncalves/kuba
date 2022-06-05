import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
import filter from './filter'
import mapper from './mapper'
import reflow from './reflow'

class Attributes {
  #map
  #target

  constructor (props, target) {
    this.#map = mapper(props)
    this.#target = target
  }

  mount () {
    return new Promise((resolve) => (
      f
        .from(f.toArray(this))
        .pipe(f.filter(f.__, f.prop('value')))
        .pipe(f.map(f.__, ({ key, value }) => filter(key, value)))
        .pipe(f.forEach(f.__, (args) => this.#target.setAttribute(...args))),

      resolve(this)
    ))
  }

  update (newAttributes) {
    return new Promise((resolve) => (
      reflow(this, newAttributes),
      resolve(this)
    ))
  }

  removeAttribute (key, value) {
    this.#map.delete(key)
    this.#target.removeAttribute(...filter(key, value))
    return this
  }

  setAttribute (key, value) {
    this.#map.set(key, value),
    this.#target.setAttribute(...filter(key, value))
    return this
  }

  [f.dunder.toArray] () {
    return f.map(
      [...this.#map],
      ([key, value]) => ({ key, value })
    )
  }

  static create () {
    return lazy(Attributes, ...arguments)
  }
}

export default Attributes
