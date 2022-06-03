import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
import filter from './filter'
import mapper from './mapper'
import reflow from './reflow'
import toList from './toList'

class Attributes {
  #map
  #target

  get list () {
    return toList(this.#map)
  }

  constructor (props, target) {
    this.#map = mapper(props)
    this.#target = target
  }

  mount () {
    return new Promise((resolve) => (
      f
        .from(this.list)
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

  static create () {
    return lazy(Attributes, ...arguments)
  }
}

export default Attributes
