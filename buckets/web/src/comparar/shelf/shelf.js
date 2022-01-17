import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Descricao from './descricao'
import Marca from './marca'
import Modelo from './modelo'
import Thumbnail from './thumbnail'

@paint(component)
class Shelf {
  #descricao
  #marca
  #modelo
  #thumbnail

  get descricao () {
    return this.#descricao ??= f.map(Compare.shelf, Descricao.create)
  }

  get marca () {
    return this.#marca ??= f.map(Compare.shelf, Marca.create)
  }

  get modelo () {
    return this.#modelo ??= f.map(Compare.shelf, Modelo.create)
  }

  get thumbnail () {
    return this.#thumbnail ??= f.map(Compare.shelf, Thumbnail.create)
  }
}

export default Shelf
