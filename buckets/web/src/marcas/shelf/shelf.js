import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import component from './component'
import getMarcas from './getMarcas'
import Marca from './marca'

@paint(component)
class Shelf {
  #marcas

  get marcas () {
    return this.#marcas ??= f.map(f.repeat({}, 24), Marca.stub)
  }

  @repaint
  changeMarcas (data) {
    this.#marcas = f.map(data, Marca.create)
    return this
  }

  @didMount
  async mount () {
    const { data, error } = await getMarcas()
    f.not(error) && this.changeMarcas(data)
    return this
  }
}

export default Shelf
