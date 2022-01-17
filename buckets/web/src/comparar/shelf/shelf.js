import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Descricao from './descricao'
import Marca from './marca'
import Modelo from './modelo'
import Nose from './nose'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

@paint(component)
class Shelf {
  #descricao
  #marca
  #modelo
  #nose
  #tamanho
  #thumbnail
  #wheelbase

  get descricao () {
    return this.#descricao ??= f.map(Compare.shelf, Descricao.create)
  }

  get marca () {
    return this.#marca ??= f.map(Compare.shelf, Marca.create)
  }

  get modelo () {
    return this.#modelo ??= f.map(Compare.shelf, Modelo.create)
  }

  get nose () {
    return this.#nose ??= f.map(Compare.shelf, Nose.create)
  }

  get tamanho () {
    return this.#tamanho ??= f.map(Compare.shelf, Tamanho.create)
  }

  get thumbnail () {
    return this.#thumbnail ??= f.map(Compare.shelf, Thumbnail.create)
  }

  get wheelbase () {
    return this.#wheelbase ??= f.map(Compare.shelf, Wheelbase.create)
  }
}

export default Shelf
