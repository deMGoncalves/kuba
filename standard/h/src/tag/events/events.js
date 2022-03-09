import { eager } from '@kuba/h'
import * as f from '@kuba/f'
import filter from './filter'
import mapper from './mapper'
import reflow from './reflow'
import toList from './toList'

class Events {
  #map
  #target

  get list () {
    return toList(this.#map)
  }

  constructor (props, target) {
    this.#map = mapper(props)
    this.#target = target
  }

  addEventListener (name, listener) {
    this.#map.set(name, listener)
    this.#target.addEventListener(...filter(name, listener))
    return this
  }

  paint () {
    f.forEach(this.list, ({ name, listener }) =>
      this.#target.addEventListener(...filter(name, listener)))
    return this
  }

  reflow (other) {
    reflow(this, other)
    return this
  }

  removeEventListener (name) {
    this.#map.delete(name)
    this.#target.removeEventListener(...filter(name))
    return this
  }

  static create (...args) {
    return eager(Events, ...args)
  }
}

export default Events
