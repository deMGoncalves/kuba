import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Modelo from './modelo'
import Thumbnail from './thumbnail'

@paint(component)
class Shelf {
  #modelo
  #thumbnail

  get modelo () {
    return this.#modelo ??= f.map(Compare.shelf, Modelo.create)
  }

  get thumbnail () {
    return this.#thumbnail ??= f.map(Compare.shelf, Thumbnail.create)
  }
}

export default Shelf
