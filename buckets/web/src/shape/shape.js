import { paint } from '@kuba/h'
import Breadcrumb from '@kuba/breadcrumb'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import Comparebutton from './comparebutton'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Especificacao from './especificacao'
import Laminas from './laminas'
import Marca from './marca'
import Material from './material'
import Modelo from './modelo'
import Origem from './origem'
import schema from './schema'
import Thumbnail from './thumbnail'

@paint(component)
@jsonld(data)
@markup
class Shape {
  #breadcrumb
  #comparebutton
  #descricao
  #especificacao
  #laminas
  #marca
  #material
  #modelo
  #origem
  #thumbnail

  get breadcrumb () {
    return this.#breadcrumb ??= Breadcrumb.create(schema().breadcrumb)
  }

  get comparebutton () {
    return this.#comparebutton ??= Comparebutton.create()
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

  get origem () {
    return this.#origem ??= Origem.create()
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
