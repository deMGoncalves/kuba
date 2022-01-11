import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import Concave from './concave'
import data from './data'
import Descricao from './descricao'
import Laminas from './laminas'
import Lixa from './lixa'
import Marca from './marca'
import Material from './material'
import Modelo from './modelo'
import Nose from './nose'
import Tamanho from './tamanho'
import Tail from './tail'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #concave
  #descricao
  #laminas
  #lixa
  #marca
  #material
  #modelo
  #nose
  #tail
  #tamanho
  #thumbnail
  #wheelbase

  get concave () {
    return this.#concave ??= Concave.create()
  }

  get descricao () {
    return this.#descricao ??= Descricao.create()
  }

  get description () {
    // TODO: a descriciption deveria ser um decorator no getter descricao
    return this.descricao.valor
  }

  get laminas () {
    return this.#laminas ??= Laminas.create()
  }

  get lixa () {
    return this.#lixa ??= Lixa.create()
  }

  get marca () {
    return this.#marca ??= Marca.create()
  }

  get material () {
    return this.#material ??= Material.create()
  }

  get modelo () {
    return this.#modelo ??= Modelo.create()
  }

  get nose () {
    return this.#nose ??= Nose.create()
  }

  get tail () {
    return this.#tail ??= Tail.create()
  }

  get tamanho () {
    return this.#tamanho ??= Tamanho.create()
  }

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create()
  }

  get title () {
    // TODO: o title deveria ser um decorator no getter modelo
    return this.modelo.valor
  }

  get wheelbase () {
    return this.#wheelbase = Wheelbase.create()
  }
}

export default Shape
