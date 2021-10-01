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
    f.forEach(this.list, ({ key, value }) =>
      this.#target.setAttribute(...filter(key, value)))
    return this
  }

  reflow (attributes) {
    reflow(this, attributes)
    return this
  }

  removeAttribute (...args) {
    const [key] = filter(...args)
    this.#map.delete(key)
    this.#target.removeAttribute(key)
    return this
  }

  setAttribute (...args) {
    const [key, value] = filter(...args)
    this.#map.set(key, value),
    this.#target.setAttribute(key, value)
    return this
  }

  static create (props, target) {
    return new Attributes(mapper(props), target)
  }
}

export default Attributes
