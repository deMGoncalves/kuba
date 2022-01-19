import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import getShapes from './getShapes'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat({}, 24), Card.create)
  }

  @repaint
  changeShapes (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }

  @didMount
  async mount () {
    const { data: shapes } = await getShapes()
    this.changeShapes(shapes)
    return this
  }
}

export default Shelf
