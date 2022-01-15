import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Shape from './shape'

@paint(component)
class Shelf {
  get shapes () {
    return f.map(Compare.shelf, Shape.create)
  }
}

export default Shelf
