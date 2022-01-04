import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import Marca from './marca'

@paint(component)
class Shelf {
  #marcas

  get marcas () {
    return this.#marcas ??= f.map(f.repeat({}, 24), Marca.stub)
  }
}

export default Shelf
