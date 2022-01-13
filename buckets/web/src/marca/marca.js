import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Shelf from './shelf'
import Site from './site'
import Thumbnail from './thumbnail'
import Origem from './origem'

@paint(component)
@jsonld(data)
@markup
class Marca {
  #thumbnail
  #descricao
  #origem
  #shelf
  #site

  get origem () {
    return this.#origem ??= Origem.create()
  }

  get descricao () {
    return this.#descricao ??= Descricao.create()
  }

  get description () {
    return this.descricao.valor
  }

  get title () {
    return global.nome
  }

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create(global)
  }

  get shelf () {
    return this.#shelf ??= Shelf.create()
  }

  get site () {
    return this.#site ??= Site.create()
  }
}

export default Marca
