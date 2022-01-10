import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Lixa from './lixa'
import Shelf from './shelf'
import Modelo from './modelo'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #descricao
  #lixa
  #modelo
  #tamanho
  #thumbnail

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

  get modelo () {
    return this.#modelo ??= Modelo.create()
  }

  get shelf () {
    return new Shelf()
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
