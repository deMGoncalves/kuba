import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
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

  mount () {
    return new Promise((resolve) => (
      f.forEach(this.list, ({ name, listener }) =>
        this.#target.addEventListener(...filter(name, listener))),
      resolve(this)
    ))
  }

  update (events) {
    return new Promise((resolve) => (
      reflow(this, events),
      resolve(this)
    ))
  }

  removeEventListener (name) {
    this.#map.delete(name)
    this.#target.removeEventListener(...filter(name))
    return this
  }

  static create () {
    return lazy(Events, ...arguments)
  }
}

export default Events
