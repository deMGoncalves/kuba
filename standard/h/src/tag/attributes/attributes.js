import * as f from '@kuba/f'
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

  constructor (map, target) {
    this.#map = map
    this.#target = target
  }

  paint () {
    f
      .from(this.list)
      .pipe(f.filter(f.__, f.prop('value')))
      .pipe(f.map(f.__, ({ key, value }) => filter(key, value)))
      .pipe(f.forEach(f.__, (args) => this.#target.setAttribute(...args)))
    return this
  }

  reflow (vAttributes) {
    reflow(this, vAttributes)
    return this
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

  static create (props, target) {
    return new Attributes(mapper(props), target)
  }
}

export default Attributes
