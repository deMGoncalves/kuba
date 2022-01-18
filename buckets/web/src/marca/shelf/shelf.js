import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import getShapes from './getShapes'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat({}, 4), Card.stub)
  }

  @repaint
  changeShapes (data) {
    this.#shapes = f.map(data, Card.create)
    return this
  }

  @didMount
  async mount () {
    const { data, error } = await getShapes()
    f.not(error) && this.changeShapes(data)
    return this
  }
}

export default Shelf
