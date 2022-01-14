import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import actions from './actions'
import component from './component'
import Shape from './shape'

@paint(component)
@actions
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.map(Compare.shelf, Shape.create)
  }
}

export default Shelf
