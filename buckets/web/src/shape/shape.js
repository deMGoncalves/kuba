import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Laminas from './laminas'
import Marca from './marca'
import Material from './material'
import Modelo from './modelo'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #descricao
  #especificacao
  #laminas
  #marca
  #material
  #modelo
  #thumbnail

  get descricao () {
    return this.#descricao ??= Descricao.create()
  }

  get description () {
    // TODO: a descriciption deveria ser um decorator no getter descricao
    return this.descricao.valor
  }

  get especificacao () {
    return this.#especificacao ??= Especificacao.create()
  }

  get laminas () {
    return this.#laminas ??= Laminas.create()
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

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create()
  }

  get title () {
    // TODO: o title deveria ser um decorator no getter modelo
    return this.modelo.valor
  }
}

export default Shape
