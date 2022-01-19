import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getMarcas from './getMarcas'
import Marca from './marca'

@paint(component)
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

  @didMount
  async mount () {
    const { data: marcas } = await getMarcas()
    this.changeMarcas(marcas)
    return this
  }
}

export default Shelf
