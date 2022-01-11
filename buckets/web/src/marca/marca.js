import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Link from './link'
import Thumbnail from './thumbnail'
import Origem from './origem'

@paint(component)
@jsonld(data)
@markup
class Marca {
  #thumbnail
  #descricao
  #link
  #origem
  get origem () {
    return this.#origem ??= Origem.create(global)
  }

  get descricao () {
    return this.#descricao ??= Descricao.create(global)
  }

  get link () {
    return this.#link ??= Link.create(global)
  }

  get title () {
    return global.nome
  }

  get thumbnail () {
    return this.#thumbnail ??= Thumbnail.create(global)
  }
}

export default Marca
