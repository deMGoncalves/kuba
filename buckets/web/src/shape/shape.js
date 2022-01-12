import { paint } from '@kuba/h'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import Comparar from './comparar'
import component from './component'
import Creditos from './creditos'
import data from './data'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Laminas from './laminas'
import Marca from './marca'
import Material from './material'
import Modelo from './modelo'
import Related from './related'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #comparar
  #creditos
  #descricao
  #especificacao
  #laminas
  #marca
  #material
  #modelo
  #related
  #thumbnail

  get comparar () {
    return this.#comparar ??= Comparar.create()
  }

  get creditos () {
    return this.#creditos ??= Creditos.create()
  }

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

  get related () {
    return this.#related ??= Related.create()
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
