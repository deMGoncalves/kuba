import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import global from '@kuba/global'
import component from './component'
import Marca from './marca'

@paint(component)
class Shelf {
  #marcas

  get marcas () {
    return this.#marcas ??= f.map(global.marcas, Marca.create)
  }
}

export default Shelf
