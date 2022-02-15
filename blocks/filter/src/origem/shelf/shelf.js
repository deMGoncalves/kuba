import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Origem from './origem'

@paint(component)
class Shelf {
  #origens

  get origens () {
    return this.#origens ??= f.map(['Brazil', 'USA'], Origem.create)
  }
}

export default Shelf
