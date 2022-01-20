import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import getShapes from './getShapes'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 24), Card.stub)
  }

  @repaint
  changeShapes (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }

  @didMount
  async mount () {
    const { data: shapes, error } = await getShapes()
    f.not(error) && this.changeShapes(shapes)
    return this
  }
}

export default Shelf
