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
      f.forEach(this, (args) => this.#target.setAttribute(...args)),
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
    return f
      .from([...this.#map])
      .pipe(f.map(f.__, ([key, value]) => ({ key, value })))
      .done()
  }

  [f.dunder.forEach] () {
    return f
      .from(this)
      .pipe(f.toArray)
      .pipe(f.filter(f.__, f.prop('value')))
      .pipe(f.map(f.__, ({ key, value }) => filter(key, value)))
      .done()
  }

  static create () {
    return lazy(Attributes, ...arguments)
  }
}

export default Attributes
