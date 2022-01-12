import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getShapes from './getShapes'
import Shape from './shape'

@paint(component)
class Related {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat({}, 4), Shape.stub)
  }

  @repaint
  changeShapes (data) {
    this.#shapes = f.map(data, Shape.create)
    return this
  }

  @didMount
  async mount () {
    const { data, error } = await getShapes()
    f.not(error) && this.changeShapes(data)
    return this
  }

  static create () {
    return new Related()
  }
}

export default Related
