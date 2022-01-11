import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import global from '@kuba/global'
import component from './component'
import Shape from './shape'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(global.shapes, Shape.create)
  }
}

export default Shelf
