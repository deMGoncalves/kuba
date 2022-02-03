import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import storage from './storage'

@paint(component)
@storage
class Related {
  #shapes

  get empty () {
    return f.equal(f.len(this.shapes), 0)
  }

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 4), Card.stub)
  }

  @repaint
  [storage.onError] () {
    this.#shapes = []
    return this
  }

  @repaint
  [storage.onResponse] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }

  static create () {
    return new Related()
  }
}

export default Related
