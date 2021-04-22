import convertToList from './convertToList'
import mapper from './mapper'
import paint from './paint'
import repaint from './repaint'
import rewind from './rewind'

@paint
class Events {
  #map
  #target

  get list () {
    return convertToList(this.#map)
  }

  get target () {
    return this.#target
  }

  constructor (map, target) {
    this.#map = map
    this.#target = target
  }

  reflow (other) {
    rewind(this, other)
    return this
  }

  @repaint
  removeItem (name) {
    this.#map.remove(name)
    return this
  }

  @repaint
  setItem (name, listener) {
    this.#map.set(name, listener)
    return this
  }

  static create (props, target) {
    return new Events(mapper(props), target)
  }
}

export default Events
