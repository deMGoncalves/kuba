import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getShape from './getShape'
import Shape from './shape'

@paint(component)
@getShape
class Shapes {
  #snapshot

  get snapshot () {
    return this.#snapshot ??= f.map(f.repeat({}, 4), Shape.stub)
  }

  @repaint
  getImages (snapshot) {
    this.#snapshot = f.map(snapshot, Shape.create)
    return this
  }

  static create () {
    return new Shapes()
  }
}

export default Shapes
