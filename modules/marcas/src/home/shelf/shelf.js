import { paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import effect from './effect'
import Marca from './marca'

@paint(component)
@effect
class Shelf {
  #marcas

  get marcas () {
    return this.#marcas ??= f.map(f.repeat(null, 24), Marca.stub)
  }

  @repaint
  changeMarcas (marcas) {
    this.#marcas = f.map(marcas, Marca.create)
    return this
  }
}

export default Shelf
