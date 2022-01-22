import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import Card from '@kuba/card'
import component from './component'
import effect from './effect'
import getShapes from './getShapes'

@paint(component)
@effect
class Related {
  #shapes

  get empty () {
    return f.equal(f.len(this.shapes), 0)
  }

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 4), Card.stub)
  }

  @repaint
  changeShapes (shapes) {
    this.#shapes = f.map(shapes, Card.create)
    return this
  }

  async mount () {
    const { data: shapes, error } = await getShapes()
    f.not(error) && this.changeShapes(shapes)
    return this
  }

  static create () {
    return new Related()
  }
}

export default Related
