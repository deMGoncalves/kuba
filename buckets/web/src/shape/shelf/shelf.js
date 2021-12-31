import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Shape from './shape'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(f.repeat(null, 24), Shape.stub)
  }
}

export default Shelf
