import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import Concave from './concave'
import data from './data'
import Descricao from './descricao'
import Lixa from './lixa'
import Shelf from './shelf'
import Material from './material'
import Modelo from './modelo'
import Nose from './nose'
import Tamanho from './tamanho'
import Tail from './tail'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #concave
  #descricao
  #lixa
  #material
  #modelo
  #nose
  #tail
  #tamanho
  #thumbnail

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

  get lixa () {
    return this.#lixa ??= Lixa.create()
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

  get shelf () {
    return new Shelf()
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
}

export default Shape
