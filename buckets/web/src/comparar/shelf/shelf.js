import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Thumbnail from './thumbnail'

@paint(component)
class Shelf {
  #thumbnail

  get thumbnail () {
    return this.#thumbnail ??= f.map(Compare.shelf, Thumbnail.create)
  }
}

export default Shelf
