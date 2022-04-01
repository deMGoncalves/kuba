import * as f from '@kuba/f'
import Card from '@kuba/card'
import storage from './storage'

class Shelf {
  #shapes

  get isEmpty () {
    return f.isEmpty(this.shapes)
  }

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 4), Card.stub)
  }

  get title () {
    return ''
  }

  [storage.query] () {
    return {}
  }

  [storage.onError] () {
    this.#shapes = []
    return this
  }

  [storage.onResponse] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }
}

export default Shelf
