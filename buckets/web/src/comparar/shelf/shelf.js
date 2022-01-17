import { paint } from '@kuba/h'
import * as f from '@kuba/f'
import Compare from '@kuba/compare'
import component from './component'
import Concave from './concave'
import Descricao from './descricao'
import Laminas from './laminas'
import Lixa from './lixa'
import Marca from './marca'
import Modelo from './modelo'
import Nose from './nose'
import Tail from './tail'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

@paint(component)
class Shelf {
  #concave
  #descricao
  #laminas
  #lixa
  #marca
  #modelo
  #nose
  #tail
  #tamanho
  #thumbnail
  #wheelbase

  get concave () {
    return this.#concave ??= f.map(Compare.shelf, Concave.create)
  }

  get descricao () {
    return this.#descricao ??= f.map(Compare.shelf, Descricao.create)
  }

  get laminas () {
    return this.#laminas ??= f.map(Compare.shelf, Laminas.create)
  }

  get lixa () {
    return this.#lixa ??= f.map(Compare.shelf, Lixa.create)
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

  get tail () {
    return this.#tail ??= f.map(Compare.shelf, Tail.create)
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
