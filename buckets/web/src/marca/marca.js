import { paint } from '@kuba/h'
import global from '@kuba/global'
import jsonld from '@kuba/jsonld'
import markup from '@kuba/markup'
import component from './component'
import data from './data'
import Descricao from './descricao'
import Link from './link'
import Shapes from './shapes'
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
  #shapes

  get origem () {
    return this.#origem ??= Origem.create()
  }

  get descricao () {
    return this.#descricao ??= Descricao.create()
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

  get shapes () {
    return this.#shapes ??= Shapes.create()
  }
}

export default Marca
