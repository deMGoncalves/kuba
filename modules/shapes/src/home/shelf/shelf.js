import * as f from '@kuba/f'
import { paint, repaint } from '@kuba/h'
import Card from '@kuba/card'
import component from './component'
import effect from './effect'

@paint(component)
@effect
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 24), Card.stub)
  }

  @repaint
  [effect.onChange] (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }
}

export default Shelf
