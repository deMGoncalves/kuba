import * as f from '@kuba/f'
import { lazy } from '@kuba/h'
import filter from './filter'
import mapper from './mapper'
import reflow from './reflow'

class Events {
  #map
  #target

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
      f.forEach(this, (args) => this.#target.addEventListener(...args)),
      resolve(this)
    ))
  }

  update (newEvents) {
    return new Promise((resolve) => (
      reflow(this, newEvents),
      resolve(this)
    ))
  }

  removeEventListener (name) {
    this.#map.delete(name)
    this.#target.removeEventListener(...filter(name))
    return this
  }

  [f.dunder.forEach] () {
    return f
      .from([...this.#map])
      .pipe(f.map(f.__, (args) => filter(...args)))
      .done()
  }

  [f.dunder.toArray] () {
    return f
      .from([...this.#map])
      .pipe(f.map(f.__, ([name, listener]) => ({ name, listener })))
      .done()
  }

  static create () {
    return lazy(Events, ...arguments)
  }
}

export default Events
