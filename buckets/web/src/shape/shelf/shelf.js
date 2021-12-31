import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'

@paint(component)
class Shelf {
  #shapes

  get shapes () {
    return this.#shapes ??= f.repeat(null, 24)
  }
}

export default Shelf
