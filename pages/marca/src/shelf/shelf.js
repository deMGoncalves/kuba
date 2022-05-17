import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import Card from '@kuba/card'
import component from './component'
import storage from './storage'

@paint(component)
@storage
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 24), Card.stub)
  }

  [storage.onErro] () {
    return this
  }

  @repaint
  [storage.onResponse] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }
}

export default Shelf
