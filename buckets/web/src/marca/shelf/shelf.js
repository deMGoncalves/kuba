import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
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

  @repaint
  [storage.onChange] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }
}

export default Shelf
